import React from 'react';
import { Header } from './Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-950 text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="absolute bottom-0 w-full">
        <MadeWithApplaa />
      </footer>
    </div>
  );
};