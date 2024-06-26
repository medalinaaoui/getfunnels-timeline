import "@/app/ui/global.css";
import TanStackProvider from "@/providers/TanStackProvider";
import { PoppinsFont, Raitor } from "@/app/ui/fonts";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

const title = "GetFunnels - Timeline";
const description = "getfunnels timeline";
const keywords = ["getfunnels", "digitalspeak"];
export const metadata: Metadata = {
  title,
  description,
  authors: [
    {
      name: "Mohamed Ali Naaoui",
      url: "https://twitter.com/Med__Ali_",
    },
  ],
  keywords,

  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@getfunnels",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-bgcolor text-white">
      <body className={`${Raitor.className} antialiased bg-bgcolor`}>
        <TanStackProvider>
          <div className="my-toaster">
            <Toaster />
          </div>

          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
