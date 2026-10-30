import Image from "next/image";
import Slider from "./compo/slider";
import Featured from "./compo/Featured";
import Offer from "./compo/offer";
import { OrbitCardStack } from "@/components/ui/orbit-card-stack";
import Balatro from "@/components/Balatro";
import FlexCarousel from "@/components/FlexCarousel";
export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
      <div className="mt-5"><OrbitCardStack/></div>
      <FlexCarousel/>
    <div className="h-30"></div>
    <div className='flex flex-col h-[calc(100vh-6rem)] mt-30 md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
           
    <div className=' flex-1 flex items-center justify-center flex-col gap-8  text-red-500 font-bold '>
        <Balatro className="w-full h-full"/>
       
        
    </div>
       {/* image container */}
    <div className='flex-1 w-full relative hidden lg:block'>
        <Image src="/image.png" fill alt=""/>
        </div>        
    </div>
    

    </main>
  );
}
