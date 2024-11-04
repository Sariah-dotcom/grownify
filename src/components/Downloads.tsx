import NumberTicker from "@/components/ui/number-ticker";


export default function Downloads() {
  return (
    <section>
        <h2 className="mb-5 text-3xl font-bold">Over</h2>
        <p className="whitespace-pre-wrap text-5xl font-bold tracking-tighter text-black dark:text-white">
            <NumberTicker value={10000} />
        </p>
        <h2 className="mt-5 text-3xl font-bold">Downloads</h2>
    </section>
  )
}
