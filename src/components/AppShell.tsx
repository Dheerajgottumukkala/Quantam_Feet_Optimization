"use client";

import React, { useState } from 'react';
import { BarChart3, Truck, MapPin, Menu, User, LogOut, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { authClient, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

// Import actual components (using default imports)
// test sample
import { FleetDashboard } from '@/components/DashboardSection';
import TruckManagementSection from '@/components/TruckManagementSection';
import AnalyticsSection from '@/components/AnalyticsSection';
import RoutePlanningSection from '@/components/RoutePlanningSection';

export const AppShell = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { data: session, refetch } = useSession();
  const router = useRouter();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'trucks', label: 'Truck Management', icon: Truck },
    { id: 'analytics', label: 'Analytics & Reporting', icon: BarChart3 },
    { id: 'routing', label: 'Route Planning', icon: MapPin },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <FleetDashboard />;
      case 'trucks':
        return <TruckManagementSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'routing':
        return <RoutePlanningSection />;
      default:
        return <FleetDashboard />;
    }
  };

  const handleLogout = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error('Failed to logout: ' + error.code);
    } else {
      localStorage.removeItem("bearer_token");
      refetch(); // Update session state
      toast.success('Successfully logged out');
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900/95 to-slate-800/95 border-r border-white/10 backdrop-blur-xl transition-all duration-300 z-50",
        sidebarCollapsed ? "w-16" : "w-64"
      )}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FALQON
              </span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-gray-400 hover:text-white hover:bg-white/10"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 text-white shadow-lg shadow-blue-500/10" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive ? "text-blue-400" : "text-gray-400"
                )} />
                {!sidebarCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        {/* Top Bar */}
        <header className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 border-b border-white/10 backdrop-blur-xl sticky top-0 z-40">
          <div className="flex items-center justify-end px-6 py-4">
            <div className="flex items-center space-x-4">
              {/* Route Planning Quick Access */}
              <Button
                onClick={() => setActiveSection('routing')}
                variant="outline"
                size="sm"
                className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-500/30 text-white hover:from-blue-500/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-200"
              >
                <Route className="h-4 w-4 mr-2" />
                Route Planning
              </Button>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-white hover:bg-white/10"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="bg-slate-800/95 border-white/10 backdrop-blur-xl"
                >
                  <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-white/10">
                    <User className="h-4 w-4 mr-2" />
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-80px)] transition-all duration-300">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};