import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import  { FadeText } from "@/components/ui/fade-text";
import { gsap } from 'gsap';
import { useEffect, useRef } from "react";

export default function Hero() {
  const leftPhoneRef = useRef<HTMLImageElement | null>(null);
  const rightPhoneRef = useRef<HTMLImageElement | null>(null);
  const middlePhoneRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const badegRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    gsap.fromTo(leftPhoneRef.current,{
        opacity: 0,
        y:30,
      },
      {
        opacity:1,
        y:-15,
        duration: 1,
        ease: "power2.out"
    });

    gsap.fromTo(middlePhoneRef.current,{
      opacity: 0,
      y:-30,
    },
    {
      opacity:1,
      y:15,
      duration: 1,
      ease: "power2.out"
    });

    gsap.fromTo(rightPhoneRef.current,{
      opacity: 0,
      y:30,
    },
    {
      opacity:1,
      y:-15,
      duration: 1,
      ease: "power2.out"
    });

    gsap.fromTo(textRef.current,{
      opacity: 0,
      y:50,
    },
    {
      opacity:1,
      y:0,
      duration: 0.5,
      delay: 2,
      ease: "power2.out"
    });

    gsap.fromTo(badegRef.current,{
      opacity: 0,
      y:30,
    },
    {
      opacity:1,
      y:0,
      duration: 0.5,
      delay: 1.9,
      ease: "power2.out"
    });
  }, [])

  return (
    <section className="flex flex-col h-[100vh] justify-center gap-8 items-center">
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>🌱 Introducing Grownify</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>

      <div className="text-center">
        <FadeText
          className="lg:text-6xl text-4xl font-bold font-inter text-black dark:text-white"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.7 } },
          }}
          text="Your Companion"
        />
        <FadeText
          className="lg:text-6xl text-4xl font-bold font-inter text-black dark:text-white"
          direction="left"
          framerProps={{
            show: { transition: { delay: 1 } },
          }}
          text="to Adulting"
        />
        
        <p ref={textRef} className="mt-3 text-sm">Stay on top of the important <br /> stuff—one habit at a time.</p>
      </div>

      <div ref={badegRef} className="flex gap-2">
        <img src="/appstore.png" alt="app store badge" />
        <img src="/googleplay.png" alt="google play store badge" />
      </div>

      <div className="mt-5 w-full flex overflow-x-hidden justify-center py-8 lg:h-[100vh]">
        <img ref={leftPhoneRef} src="/iphone.png" alt="" />
        <img ref={middlePhoneRef} src="/iphone.png" alt="" />
        <img ref={rightPhoneRef} src="/iphone.png" alt="" />
      </div>
    </section>
  )
}