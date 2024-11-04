import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  { FadeText } from "@/components/ui/fade-text";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  
  useGSAP(
    () => {
      gsap.to('.phone', 
      {
        y:600,
        scrollTrigger: {
          trigger: '.features',
          start: 'top 50px',
          end:'bottom top',
          scrub: true,
        }
      })

      gsap.fromTo('.title, .feature-description', {
        x:-300,
        opacity: 0,

      },
        {
          x:0,
          opacity: 1,
          duration: 0.6,
          stagger:0.3,
          scrollTrigger: {
            trigger: '.features',
            start: 'top 500px',
          }
        })
  });

  return (
    <section>

      <div className="features flex flex-col items-center h-[70vh]">
        <div className="px-10 text-center mb-10">
          <h2 ref={titleRef} className="title text-2xl font-semibold mb-5">Build Independence</h2>
          <p ref={paragraphRef} className='feature-description'>Grownify helps you track of habits like grocery shopping, meal prepping, or keeping living spaces organized which are essential for developing self-sufficiency and independence.</p>
        </div>
        <img ref={imgRef} src="/iphone.png" alt="iphone" className='phone' />
      </div>

      <div className="features flex flex-col items-center h-[70vh]">
        <div className="px-10 text-center mb-10">
          <h2 className="text-2xl font-semibold mb-5">Self-Care and Mental Health</h2>
          <p>Track and be reminded of relaxation, mindfulness, journaling, or digital detox habits that can help you manage stress and prioritize your mental health.</p>
        </div>
      </div>
    </section>
    
  )
}
