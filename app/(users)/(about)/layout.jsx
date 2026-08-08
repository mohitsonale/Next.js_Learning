export default function AboutLayout({children}) {
  return (
    <html
    >
      <body className="min-h-full flex flex-col">
        <h1>For the about folder</h1>
        {children}
        </body>
    </html>
  );
}