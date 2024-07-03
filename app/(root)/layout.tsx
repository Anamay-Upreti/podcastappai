export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <main className="bg-gray-800 p-4">
          <p className="text-white-1">LEFT SIDEBAR</p>
          {children}
          <p className="text-white-1">RIGHT SIDEBAR</p>
        </main>
      </div>
    );
  }
  