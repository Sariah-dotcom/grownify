import NumberTicker from "@/components/ui/number-ticker";


export default function Downloads() {
  return (
    <section className="mt-[5rem] relative z-100 h-[30vh] justify-center">
        <h2 className="mb-3 text-2xl">Over</h2>
        <p className="whitespace-pre-wrap text-5xl font-bold tracking-tighter">
          <NumberTicker value={10000} />
        </p>
        <h2 className="mt-3 text-2xl">Downloads</h2>
    </section>
  )
}
