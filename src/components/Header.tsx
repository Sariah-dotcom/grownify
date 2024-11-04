import { Button } from "@/components/ui/button";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function Header() {
  const navRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo('.header', {
        opacity:0,
      },
      {
        opacity:1,
        duration:0.8,
        delay:2.8,
      }
  )
  })

  return (
    <div ref={navRef} className="header py-5 px-3 flex justify-between items-center lg:px-10 lg:mb-10">
      <img className="h-12 w-12" src="/logo.png" alt="logo" />
      <Button className="font-inter rounded-full">Get Started</Button>
    </div>
  )
}
