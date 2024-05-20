import LeftBar from "./components/LeftBar";

export default function SingleMovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="h-screen flex">
        <LeftBar />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
