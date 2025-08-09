"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="text-red-400 text-4xl mb-4">🔄</div>
        <div className="font-medium text-lg mb-2 text-white">Redirecting to Admin Login...</div>
        <div className="w-6 h-6 border-2 border-red-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
}
