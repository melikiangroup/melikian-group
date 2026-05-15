export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center bg-stone-950 px-6 select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,25,23,0.45)_0%,rgba(12,10,9,1)_75%)] pointer-events-none" />
      <div className="z-10 flex flex-col items-center space-y-8 text-center animate-presence">
        <h1 className="font-serif text-[7rem] md:text-[11rem] font-light leading-none tracking-normal text-stone-200">
          M
        </h1>
        <p className="font-sans text-[0.65rem] md:text-[0.7rem] uppercase tracking-extreme text-stone-500 font-medium">
          By Referral Only
        </p>
      </div>
      <div className="absolute bottom-12 z-10 animate-presence opacity-40">
        <p className="font-sans text-[0.6rem] uppercase tracking-widest text-stone-400">
          Melikian Group Consulting
        </p>
      </div>
    </main>
  )
}