import Image from "next/image";
import banner from "@/images/bannerImg.jpg";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative bg-black">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[110px] font-bold">AI Technology</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
        it’s a game-changer
        </p>
      </div>
    </div>
  );
};

export default Hero;
