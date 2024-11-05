import NumberTicker from "@/components/ui/number-ticker";


export default function Downloads() {
  return (
    <section className="mt-[8rem] relative z-100 h-[30vh] justify-center mb-[5rem] lg:mt-[15rem] lg:mb-[10rem]">
        <h2 className="mb-3 text-2xl">Over</h2>
        <p className="whitespace-pre-wrap text-5xl font-bold tracking-tighter">
          <NumberTicker value={10000} />
        </p>
        <h2 className="mt-3 text-2xl">Downloads</h2>
      <img className="lg:h-[30rem]" src="/screens.png" alt="app screens" />
    </section>
  )
}
