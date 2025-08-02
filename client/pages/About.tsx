import PlaceholderPage from "./PlaceholderPage";

export default function About() {
  return (
    <PlaceholderPage
      title="About EnviroCare AI"
      description="Learn about our mission to bridge environmental science and public health through cutting-edge AI technology and data analysis."
      icon={
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
    />
  );
}
