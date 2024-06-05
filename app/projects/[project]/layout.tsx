import MainMenu from "./components/MainMenu";

export default function SingleMovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="h-screen flex">
        <MainMenu />
        <div className="flex w-full">{children}</div>
      </div>
    </main>
  );
}
