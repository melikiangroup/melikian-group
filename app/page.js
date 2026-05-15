export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center bg-stone-950 px-6 select-none">
      
      {/* Deep, moody atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,35,30,0.2)_0%,rgba(12,10,9,1)_80%)] pointer-events-none" />

      <div className="z-10 flex flex-col items-center space-y-12 text-center animate-presence">
        {/* The 'M' - now using a lighter, more elegant weight */}
        <h1 className="font-serif text-[8rem] md:text-[14rem] font-light leading-none tracking-tightest text-stone-200 opacity-90 italic">
          M
        </h1>
        
        {/* Subtle, wide-tracked subtext */}
        <div className="space-y-2">
          <p className="font-sans text-[0.55rem] md:text-[0.6rem] uppercase tracking-extreme text-stone-500 font-bold">
            By Referral Only
          </p>
          <div className="h-[1px] w-8 bg-stone-800 mx-auto mt-4" />
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-16 z-10 animate-presence opacity-30 hover:opacity-60 transition-opacity duration-1000">
        <p className="font-sans text-[0.55rem] uppercase tracking-[0.4em] text-stone-400">
          Melikian Group Consulting
        </p>
      </div>

    </main>
  )
}
