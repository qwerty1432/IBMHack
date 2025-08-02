import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="relative w-8 h-8">
      {/* Globe */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8 text-eco-green-600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      {/* Stethoscope around the globe */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="absolute inset-0 w-8 h-8 text-health-blue-600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 2v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 2v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 8a3 3 0 1 0 0 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 14a3 3 0 1 0 0-6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="19"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M18 19h-4a4 4 0 0 1-4-4v-1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-eco-green-600 to-health-blue-600 bg-clip-text text-transparent">
      EnviroCare AI
    </span>
  </div>
);

export const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/analytics" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Analytics
            </Link>
            <Link 
              to="/insights" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Insights
            </Link>
            <Link 
              to="/about" 
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Button asChild className="bg-gradient-to-r from-eco-green-600 to-health-blue-600 hover:from-eco-green-700 hover:to-health-blue-700">
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
