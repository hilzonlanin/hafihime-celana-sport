import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showVideo?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showVideo = true }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header showVideo={showVideo} />
      <main className="flex-grow pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;