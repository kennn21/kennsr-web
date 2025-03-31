export default function HomeHeroSection() {
  return (
    <div
      className="h-screen w-full bg-cover bg-right"
      style={{
        backgroundImage: "url('/assets/images/hero_img.jpg')",
      }}
    >
      {/* Fade overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
        }}
      ></div>

      {/* Your content goes here */}
      <div className="relative z-10 h-full p-8 pl-24">
        <div className="flex h-full w-1/2 flex-col items-start justify-center">
          <h1 className="inline-block rounded-md py-2 text-5xl font-extrabold tracking-wide text-white uppercase shadow-lg">
            kennsr
          </h1>
          <p className="mt-2 inline-block text-lg tracking-widest text-gray-300 uppercase">
            Fitness Model | Aesthetics & Simpleness
          </p>
        </div>
      </div>
    </div>
  )
}
