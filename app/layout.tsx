import "@/app/ui/global.css";
import TanStackProvider from "@/providers/TanStackProvider";
import { PoppinsFont, Raitor } from "@/app/ui/fonts";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-bgcolor text-white">
      <body className={`${Raitor.className} antialiased bg-bgcolor`}>
        <TanStackProvider>
          <Toaster />

          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
