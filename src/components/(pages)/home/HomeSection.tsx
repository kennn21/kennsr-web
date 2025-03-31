import { GallerySection } from './GallerySection'
import HomeHeroSection from './HomeHeroSection'
import HomeInfoSection from './HomeInfoSection'
import RateCard from './HomeRateCardSection'

export default function HomeSection() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="relative flex h-fit w-full max-w-4xl flex-col justify-start">
        <HomeHeroSection />
        <div className="z-1 flex h-fit w-full flex-col justify-start">
          <HomeInfoSection />
          <GallerySection />
          <RateCard />
        </div>

        <div className="absolute -right-20 bottom-0 z-[-1] h-[20dvw] w-[20dvw] rounded-full bg-yellow-500/20 blur-3xl"></div>
      </div>
    </div>
  )
}
