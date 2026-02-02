import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Spline Viewer Script */}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.47/build/spline-viewer.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
