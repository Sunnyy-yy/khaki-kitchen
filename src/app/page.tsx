import Image from "next/image";
import khaki from "./components/khakikitchen.svg";
import upper from "./components/upper.svg";
import bottom from "./components/bottom.svg";
import youtube from "./components/youtube.svg";
import instagram from "./components/instagram.svg";
import whatsapp from "./components/whatsapp.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500']
})

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="w-screen h-screen overflow-hidden">
      <Image
      className="absolute w-screen max-h-40 object-cover overflow-clip pointer-events-none"
      src={upper}
      alt="upper" />
    <div className="flex flex-col justify-center items-center w-full bg-[#F8D1A6] min-h-screen max-h-screen">
      <div className="flex flex-col justify-center items-center z-10 mt-20">
      <Image
      src={khaki}
      height={156}
      width={300}
      alt="Khaki Kitchen" />
      <p className="text-[#C14627] text-lg md:text-4xl mt-5 ml-5">Get Ready! Something really tasty is </p>
      <p className="text-[#C14627] text-2xl md:text-5xl mt-12 font-medium ">COMING SOON </p>
      <p className="text-[#C14627] text-3xl md:text-6xl mt-12 font-extrabold ">09&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2024</p>
      <div className="flex flex-row mt-5 gap-10 w-fit items-center justify-center">
        <a href="https://www.youtube.com/@TheKhakiKitchen" target="_blank">
        <Image
        src={youtube}
        alt="youtube"
        width={135}
        />
        </a>
        <a href="https://www.instagram.com/thekhakikitchen/" target="_blank">
        <Image
        src={instagram}
        alt="instagram"
        width={135} />
        </a>
         <a href="https://chat.whatsapp.com/BpIyS12ahv9J9vSiSJAnBH" target="_blank">
        <Image
        src={whatsapp}
        alt="whatsapp"
        width={135} />
        </a>
      </div>
      </div>
    </div>
    <Image
    className="absolute w-screen max-h-40 object-cover overflow-clip pointer-events-none inset-x-0 bottom-0 "
    src={bottom}
    alt="bottom" />
    </div>
    </main>
      );
}
