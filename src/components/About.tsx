

export default function About() {
  return (
    <div className="gap-3 lg:flex lg:items-center lg:gap-10">
      <div className="lg:w-1/2 lg:pl-10">
        <h2 className="text-2xl font-bold lg:text-left lg:text-5xl">Tired of cosplaying as <br />an adult? Look no further!</h2>
        <p className="text-center lg:text-left mt-3 px-8">
          Grownify helps you to tackle adulthood the right way. <br /><br />
          Track bills, plan groceries, call your mom, and prioritize self-care all on one app. 
        </p>
      </div>
      

      <div className="w-full lg:w-1/2 lg:border-l-2 lg:border-black">
        <div className="flex gap-16 py-10 w-full flex overflow-x-hidden">
          <img className="rotate-45" src="/iphone.png" alt="" />
          <img className="rotate-45" src="/iphone.png" alt="" />
        </div>

        <div className="flex gap-16 py-5 -mt-36 -ml-2 flex overflow-x-hidden lg:ml-0">
          <img className="rotate-45" src="/iphone.png" alt="" />
          <img className="rotate-45" src="/iphone.png" alt="" />
        </div>
      </div>
    
    </div>
  )
}
