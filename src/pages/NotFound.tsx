
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 animate-fade-in p-6 text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Page not found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          We're sorry, the page you requested could not be found. Please check
          the URL or go back to the dashboard.
        </p>
      </div>
      <div className="space-x-4">
        <Button onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </Button>
        <Button variant="outline" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
