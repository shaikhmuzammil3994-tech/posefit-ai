export const metadata = {
  title: "PoseFit AI",
  description: "AI Fitness App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
