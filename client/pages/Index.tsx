import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-eco-green-50 via-health-blue-50 to-accent">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-eco-green-100 text-eco-green-800 hover:bg-eco-green-200">
              🌍 AI-Powered Environmental Health Intelligence
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting{" "}
              <span className="bg-gradient-to-r from-eco-green-600 to-health-blue-600 bg-clip-text text-transparent">
                Environment
              </span>{" "}
              & Health
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover how environmental factors impact health trends with our advanced AI analytics. 
              Make data-driven decisions for healthier communities and a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-eco-green-600 to-health-blue-600 hover:from-eco-green-700 hover:to-health-blue-700 text-lg px-8 py-3"
              >
                <Link to="/get-started">Start Exploring</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Environmental Health Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI platform correlates environmental data with health outcomes to provide actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-eco-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-eco-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-eco-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle className="text-eco-green-800">Air Quality Analysis</CardTitle>
                <CardDescription>
                  Track air pollution levels and their correlation with respiratory health patterns across different regions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-health-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-health-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-health-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <CardTitle className="text-health-blue-800">Climate Health Impact</CardTitle>
                <CardDescription>
                  Analyze how climate changes affect disease patterns, mental health, and overall community wellbeing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <CardTitle className="text-purple-800">Predictive Insights</CardTitle>
                <CardDescription>
                  Get AI-powered predictions about future health risks based on environmental trends and patterns
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-eco-green-600 to-health-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Making a Global Impact
            </h2>
            <p className="text-xl text-eco-green-100 max-w-2xl mx-auto">
              Our platform processes vast amounts of environmental and health data to deliver meaningful insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-eco-green-100 text-lg">Data Points Analyzed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-eco-green-100 text-lg">Cities Monitored</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-eco-green-100 text-lg">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-eco-green-100 text-lg">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to explore environmental health connections?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join researchers, policymakers, and health professionals using EnviroCare AI to build healthier communities.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-eco-green-600 to-health-blue-600 hover:from-eco-green-700 hover:to-health-blue-700 text-lg px-8 py-3"
          >
            <Link to="/get-started">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
