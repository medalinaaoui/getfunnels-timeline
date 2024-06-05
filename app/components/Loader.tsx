// import Image from "next/image";
// const Loader = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center z-[60] bg-primary">
//       {/* <span className="main-loader"></span> */}

//       <div className="w-48">
//         <Image
//           src={
//             "https://getfunnels.space/wp-content/uploads/2023/06/GF_NVV_LogoF.webp"
//           }
//           alt=""
//           width={1000}
//           height={1000}
//           className="h-full w-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };
// export default Loader;

import Image from "next/image";
import { quotes } from "@/lib/needed-data";
const Loader = () => {
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  const quote = getRandomQuote();

  return (
    <div className="h-screen w-screen flex justify-center items-center z-[60] bg-primary">
      <div className="flex relative flex-col items-center gap-8 w-11/12 md:w-1/2  2xl:mx-auto 2xl:max-w-7xl">
        <p className="text-center text-base md:text-lg">{quote}</p>
        <span className="loader2"></span>
      </div>
    </div>
  );
};
export default Loader;

// import Image from "next/image";
// const Loader = () => {
//   return (
//     <div className="h-screen w-screen flex justify-center items-center z-[60] bg-primary">
//       <div className="relative  w-2/3  2xl:mx-auto 2xl:max-w-7xl">
//         <p className="text-center text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
//           obcaecati placeat sequi facere totam veniam incidunt provident
//         </p>
//         <span className="loader1 opacity-50 absolute top-0 bottom-0 right-0 left-0 m-auto"></span>
//       </div>
//     </div>
//   );
// };
// export default Loader;
