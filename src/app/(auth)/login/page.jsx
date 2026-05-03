"use client";

import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginPending, setLoginPending] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginPending(true);
        console.log("Login form submitted:", formData);
        const { data, error } = await authClient.signIn.email({
            email: formData.email, // required
            password: formData.password, // required
            rememberMe: true,
            callbackURL: callbackUrl,
        });
        if (!error) {
            router.push(callbackUrl);
            router.refresh();
        }
        if (error) {
            toast.error(error.message);
        }
        setLoginPending(false);
    };

    const handleGoogleLogin = async () => {
        console.log("Google Login Triggered");
        const data = await authClient.signIn.social({
            provider: "google",
        });
        if (!data) {
            router.push(callbackUrl);
            router.refresh();
        }
        if (data.error) {
            toast.error(data.error.message);
        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}
