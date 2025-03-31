import { GallerySection } from '../shared/GallerySection'
import HomeHeroSection from './HomeHeroSection'
import HomeInfoSection from './HomeInfoSection'

export default function HomeSection() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="relative flex h-fit w-full max-w-4xl flex-col justify-start">
        <HomeHeroSection />
        <HomeInfoSection />
        <GallerySection />
        <div className="absolute -right-20 bottom-0 z-[-1] h-[20dvw] w-[20dvw] rounded-full bg-yellow-500/20 blur-3xl"></div>
      </div>
    </div>
  )
}
