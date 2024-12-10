
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
        y:150,
      },
      {
        opacity:1,
        y:90,
        duration: 1,
        ease: "power2.out"
    });

    gsap.fromTo(middlePhoneRef.current,{
      opacity: 0,
      y:-50,
    },
    {
      opacity:1,
      y:15,
      duration: 1,
      ease: "power2.out"
    });

    gsap.fromTo(rightPhoneRef.current,{
      opacity: 0,
      y:150,
    },
    {
      opacity:1,
      y:90,
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
      delay: 2.5,
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
      delay: 4.5,
      ease: "power2.out"
    });
  }, [])

  return (
    <section className="flex flex-col justify-center items-center text-center gap-[1.5rem] mt-[5rem] lg:mt-[2rem]">
      
      <div className="relative -z-1 lg:pl-10 flex flex-col gap-1">
        <FadeText
          className="text-4xl font-bold font-plus lg:text-6xl"
          direction="up" 
          framerProps={{
            show: { transition: { delay: 1 } },
          }}
          text="Your Companion"
        />

        <FadeText
          className="text-4xl font-bold font-plus lg:text-6xl"
          direction="up" 
          framerProps={{
            show: { transition: { delay: 1.3 } },
          }}
          text="to Adulting"
        />
      </div>

      <p ref={textRef} className="text-light-grey text-center text-sm px-[5rem]">Stay on top of the important stuff—one habit at a time.</p>

      <div ref={badegRef} className="flex gap-3 lg:gap-10">
        <img className="h-10" src="/badge-1.png" alt="app store badge" />
        <img className="h-10" src="/badge-2.png" alt="google play store badge" />
      </div>

      <div className="flex justify-center items-center">
        <div className="absolute bg-light-green w-[90%] h-[50vh] rounded-[2rem] lg:h-[50vh]"></div>
        <div className="w-full flex overflow-x-hidden justify-center py-8 h-[90vh] lg:h-[110vh]">
          <img className="h-[25rem] lg:h-[30rem]" ref={leftPhoneRef} src="/test.png" alt="" />
          <img className="h-[25rem] lg:h-[30rem]" ref={middlePhoneRef} src="/test-2.png" alt="" />
          <img className="h-[25rem] lg:h-[30rem]" ref={rightPhoneRef} src="/test-3.png" alt="" />
        </div>
      </div>

    </section>
  )
}
