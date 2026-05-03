"use client";

import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { data, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50">
                <span className="loading loading-spinner text-indigo-600 loading-lg"></span>
            </div>
        );
    }

    if (!data?.user) {
        // Fallback catch
        return (
            <div className="min-h-[85vh] flex items-center justify-center bg-gray-50/50">
                <p className="text-gray-500">Redirecting to login...</p>
            </div>
        );
    }

    const { user } = data;

    return (
        <div className="min-h-[85vh] bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="shrink-0">
                        <img
                            src={user.image || `https://ui-avatars.com/api/?name=${user.name || "User"}&size=150`}
                            alt="Profile Avatar"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-indigo-50 shadow-md"
                        />
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-4 w-full">
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{user.name}</h1>
                            <p className="text-gray-500 font-medium mt-1">{user.email}</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-3 text-left">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                <span className="text-sm text-gray-500 font-medium">Account Status</span>
                                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">Active</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500 font-medium">User ID</span>
                                <span className="text-sm text-gray-900 font-mono text-xs">{user.id}</span>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-center md:justify-start">
                            <Link
                                href="/profile/edit"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg shadow-indigo-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <svg className="w-4 h-4 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
