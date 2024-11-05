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
    gsap.fromTo('.title, .feature-description, .phone', {
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

      gsap.fromTo('.title-2, .feature-description-2, .phone-2', {
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

      <div className="features flex flex-col items-center lg:flex-row">
        <div className="px-10 text-center mb-10 lg:w-1/2 lg:text-left">
          <h2 ref={titleRef} className="title text-2xl font-semibold mb-5 lg:text-left lg:text-4xl">Build Independence</h2>
          <p ref={paragraphRef} className='feature-description'>Grownify helps you track of habits like grocery shopping, meal prepping, or keeping living spaces organized which are essential for developing self-sufficiency and independence.</p>
        </div>
        <div className='lg:w-1/2 flex justify-center'>
          <img ref={imgRef} src="/test-3.png" alt="iphone" className='h-[25rem] lg:h-[30rem]' />
        </div>
      </div>

      <div className="feature-2 flex flex-col items-center mt-[5rem] lg:flex-row lg:text-left">
        <div className="px-10 text-center mb-10 lg:w-1/2">
          <h2 ref={titleRef2} className="title-2 text-2xl font-semibold mb-5 lg:text-left lg:text-4xl">Self-Care and Mental Health</h2>
          <p ref={paragraphRef2} className='feature-description-2 lg:text-left'>Track and be reminded of relaxation, mindfulness, journaling, or digital detox habits that can help you manage stress and prioritize your mental health.</p>
        </div>
        <div className='lg:w-1/2 flex justify-center'>
          <img ref={imgRef} src="/test-4.png" alt="iphone" className='h-[25rem] lg:h-[30rem]' />
        </div>
      </div>
    </section>
    
  )
}
