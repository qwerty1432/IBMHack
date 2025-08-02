import PlaceholderPage from "./PlaceholderPage";

export default function GetStarted() {
  return (
    <PlaceholderPage
      title="Get Started"
      description="Begin your journey with EnviroCare AI. Set up your account, connect data sources, and start exploring environmental health correlations."
      icon={
        <svg className="w-8 h-8 text-eco-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      }
    />
  );
}
