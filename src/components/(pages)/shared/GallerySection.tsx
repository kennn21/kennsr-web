'use client'
import { useGallery } from '@/app/hooks/useGallery'
import Image from 'next/image'
import { FC } from 'react'

export const GallerySection: FC = () => {
  const { images } = useGallery()

  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img) => (
          <div
            key={img.pathname}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={img.url}
              alt={`Gallery image - ${img.pathname}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
