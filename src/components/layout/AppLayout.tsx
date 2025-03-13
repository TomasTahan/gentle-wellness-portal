
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background animate-fade-in">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-screen">
        <TopBar />
        <div className="p-6 flex-1 overflow-auto">
          {isMounted && (
            <div className="animate-scale-in">
              <Outlet />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
