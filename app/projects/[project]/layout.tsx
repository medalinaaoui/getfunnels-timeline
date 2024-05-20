import LeftBar from "./components/LeftBar";
import MainMenu from "./components/MainMenu";

export default function SingleMovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="h-screen flex">
        <LeftBar />
        <MainMenu />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
