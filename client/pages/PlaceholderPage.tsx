import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-eco-green-50 to-health-blue-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center p-8 border-2 border-dashed border-gray-300">
          <CardHeader>
            {icon && (
              <div className="w-16 h-16 bg-gradient-to-r from-eco-green-100 to-health-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {icon}
              </div>
            )}
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 mb-8">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 mb-6">
              This page is coming soon! Continue prompting to help build out this section of the application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/">← Back to Home</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-eco-green-600 to-health-blue-600 hover:from-eco-green-700 hover:to-health-blue-700">
                <Link to="/get-started">Get Started</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
