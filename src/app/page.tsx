"use client";

import { useEffect } from 'react';
import FalqonLanding from '@/components/LandingAndAuth';
import { AppShell } from '@/components/AppShell';
import { useSession } from '@/lib/auth-client';

export default function Home() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (session?.user) {
    return <AppShell />;
  }

  return <FalqonLanding />;
}