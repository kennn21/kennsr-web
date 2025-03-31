'use client'

import { ListBlobResultBlob } from '@vercel/blob'
import Image from 'next/image'
import { FC, useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'

type GalleryProps = {
  images: ListBlobResultBlob[]
}

export const Gallery: FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setIsViewerOpen(false)
  }

  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((img, index) => (
          <div
            key={img.pathname}
            className="relative aspect-square cursor-pointer overflow-hidden shadow-md"
            onClick={() => openImageViewer(index)}
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

      {isViewerOpen && (
        <ImageViewer
          src={images.map((img) => img.url)}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          closeOnClickOutside={true}
        />
      )}
    </section>
  )
}
