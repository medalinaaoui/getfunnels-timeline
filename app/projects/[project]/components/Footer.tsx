import Image from "next/image";
import Logo from "@/public/logo-ds.png";
import Link from "next/link";
import { ActionButton } from "@/app/components/Button";
import { FaXTwitter } from "react-icons/fa6";
import { ClashDisplay } from "@/app/ui/fonts";
const Footer = () => {
  return (
    <footer className={`bg-darkText text-lightText py-14 px-5`}>
      <div className="flex justify-between w-full p-4 pb-8 border-b border-lightText">
        <div>
          <div className="w-36 ">
            <Image
              src={Logo}
              alt=""
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <ul className="flex items-center gap-4 mt-8">
            <li className="grid gap-2">
              <h6 className={`font-semibold ${ClashDisplay.className}`}>
                Phone:
              </h6>
              <Link href="tel:+1-123-456-7890">+1-123-456-7890</Link>
            </li>
            <li className="grid gap-2">
              <h6 className="font-semibold">Phone:</h6>
              <Link href="tel:+1-123-456-7890">+1-123-456-7890</Link>
            </li>
            <li className="grid gap-2">
              <h6 className="font-semibold">Phone:</h6>
              <Link href="tel:+1-123-456-7890">+1-123-456-7890</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Stay Connected: Follow us on social media:</p>
          <ul className="flex items-center gap-2 mt-2">
            <li>
              <ActionButton className="bg-transparent border border-lightText">
                <Link className="text-xl" href={"x.com"}>
                  <FaXTwitter />
                </Link>
              </ActionButton>
            </li>
            <li>
              <ActionButton className="bg-transparent border border-lightText">
                <Link className="text-xl" href={"x.com"}>
                  <FaXTwitter />
                </Link>
              </ActionButton>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center w-full py-3">
        <strong className="text-sm">© by get funnels.</strong>
        <div className="flex gap-8">
          <span className="text-sm">privacy policy</span>
          <span className="text-sm">terms condition</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
