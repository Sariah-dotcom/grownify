import NumberTicker from "@/components/ui/number-ticker";


export default function Downloads() {
  return (
    <section className="mt-[5rem] bg-light-green relative z-100 py-3">
        <h2 className="mb-5 text-3xl">Over</h2>
        <p className="whitespace-pre-wrap text-5xl font-bold tracking-tighter">
          <NumberTicker value={10000} />
        </p>
        <h2 className="mt-5 text-3xl">Downloads</h2>
    </section>
  )
}
