export const metadata = {
  title: "PoseFit AI",
  description: "AI virtual try-on platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
} 
