
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Users, DollarSign, Home, Settings } from "lucide-react";

const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Residents",
    path: "/residents",
    icon: User,
  },
  {
    name: "Staff",
    path: "/staff",
    icon: Users,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: DollarSign,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  const LinkContent = ({ link }: { link: (typeof sidebarLinks)[0] }) => {
    const Icon = link.icon;
    const isActive = location.pathname === link.path;

    return (
      <div
        className={cn(
          "flex items-center gap-3 py-3 px-3 rounded-md transition-all",
          isActive
            ? "text-sidebar-primary-foreground bg-sidebar-primary font-medium"
            : "text-sidebar-foreground hover:bg-sidebar-accent"
        )}
      >
        <Icon size={20} className="flex-shrink-0" />
        <span className="text-sm">{link.name}</span>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <ShadcnSidebar className="hidden md:flex">
        <SidebarHeader className="p-6">
          <h2 className="text-xl font-semibold tracking-tight">Care Portal</h2>
          <p className="text-sm text-muted-foreground">Staff Dashboard</p>
        </SidebarHeader>

        <SidebarContent className="px-3">
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className="block">
                <LinkContent link={link} />
              </NavLink>
            ))}
          </nav>
        </SidebarContent>

        <SidebarFooter className="p-6">
          <div className="p-4 bg-sidebar-accent rounded-lg">
            <p className="text-xs text-sidebar-foreground mb-2">Need Help?</p>
            <Button variant="outline" className="w-full text-xs" size="sm">
              Contact Support
            </Button>
          </div>
        </SidebarFooter>
      </ShadcnSidebar>

      {/* Mobile Sheet */}
      <div className="md:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-40"
            >
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold tracking-tight">
                Care Portal
              </h2>
              <p className="text-sm text-muted-foreground">Staff Dashboard</p>
            </div>

            <nav className="p-3 space-y-1">
              {sidebarLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="block"
                  onClick={closeMobileMenu}
                >
                  <LinkContent link={link} />
                </NavLink>
              ))}
            </nav>

            <div className="p-6 mt-auto">
              <div className="p-4 bg-sidebar-accent rounded-lg">
                <p className="text-xs text-sidebar-foreground mb-2">
                  Need Help?
                </p>
                <Button variant="outline" className="w-full text-xs" size="sm">
                  Contact Support
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
