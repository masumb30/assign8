"use client";

import { authClient } from "@/app/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function EditProfilePage() {
    const { data: sessionData, isPending: isSessionPending } = authClient.useSession();
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        if (sessionData?.user) {
            setName(sessionData.user.name || "");
            setImage(sessionData.user.image || "");
        }
    }, [sessionData]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        const { data, error } = await authClient.updateUser({
            name,
            image: image || undefined,
        });

        setIsUpdating(false);

        if (error) {
            toast.error(error.message || "Failed to update profile");
        } else {
            toast.success("Profile updated successfully!");
            router.push("/profile");
            router.refresh(); // Refresh Next.js cache to ensure navbar updates
        }
    };

    if (isSessionPending) {
        return (
            <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50">
                <span className="loading loading-spinner text-indigo-600 loading-lg"></span>
            </div>
        );
    }

    if (!sessionData?.user) {
        return (
            <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50">
                <p className="text-gray-500">Redirecting to login...</p>
            </div>
        );
    }

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-md w-full space-y-8 bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-gray-100 relative z-10">
                <div className="text-center">
                    <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Edit Profile
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 font-medium">
                        Update your personal information below
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
                    <div className="space-y-5">

                        {/* Live Avatar Preview */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={image || `https://ui-avatars.com/api/?name=${name || "User"}&size=150`}
                                alt="Avatar Preview"
                                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-50 shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-4 py-3.5 border border-gray-200 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors sm:text-sm shadow-sm"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="image">
                                Avatar Image URL
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="url"
                                className="appearance-none relative block w-full px-4 py-3.5 border border-gray-200 placeholder-gray-400 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors sm:text-sm shadow-sm"
                                placeholder="https://example.com/avatar.png"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            href="/profile"
                            className="w-1/3 flex justify-center py-3.5 px-4 border border-gray-200 text-sm font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="w-2/3 flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg shadow-indigo-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isUpdating ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
