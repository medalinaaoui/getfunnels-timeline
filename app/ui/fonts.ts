// import { Raitor } from './fonts';
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const PoppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Raitor = localFont({
  src: "../../public/fonts/Raitor-Regular.ttf",
});
export const ClashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay/ClashDisplay-Variable.ttf",
});
