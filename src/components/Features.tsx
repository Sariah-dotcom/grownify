import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef2 = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef2 = useRef<HTMLParagraphElement | null>(null);
  useGSAP(
    () => {
      gsap.to('.phone', 
      {
        y:600,
        scrollTrigger: {
          trigger: '.phone',
          start: 'center',
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
            start: 'top 100px',
          }
        })

        gsap.fromTo('.title-2, .feature-description-2', {
          x:-300,
          opacity: 0,
  
        },
          {
            x:0,
            opacity: 1,
            duration: 0.6,
            stagger:0.3,
            scrollTrigger: {
              trigger: '.feature-2',
              start: 'top 100px',
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

      <div className="feature-2 flex flex-col items-center h-[70vh]">
        <div className="px-10 text-center mb-10">
          <h2 ref={titleRef2} className="title-2 text-2xl font-semibold mb-5">Self-Care and Mental Health</h2>
          <p ref={paragraphRef2} className='feature-description-2'>Track and be reminded of relaxation, mindfulness, journaling, or digital detox habits that can help you manage stress and prioritize your mental health.</p>
        </div>
      </div>
    </section>
    
  )
}
