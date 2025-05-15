'use client'

import { ListBlobResultBlob } from '@vercel/blob'
import Image from 'next/image'
import { FC, useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { Play } from 'lucide-react'

type GalleryProps = {
  items: ListBlobResultBlob[]
}

// Helper function to determine if a file is a video based on its pathname or content type
const isVideoFile = (file: ListBlobResultBlob): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv']
  return videoExtensions.some((ext) =>
    file.pathname.toLowerCase().endsWith(ext)
  )
}

// Simple Video Viewer component
const VideoViewer: FC<{
  src: string
  onClose: () => void
}> = ({ src, onClose }) => {
  return (
    <div className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative max-h-screen max-w-screen-lg">
        <button
          className="bg-opacity-50 hover:bg-opacity-70 absolute top-4 right-4 z-10 rounded-full bg-black p-2 text-white"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <video
          src={src}
          controls
          autoPlay
          className="max-h-screen max-w-screen-lg"
        />
      </div>
    </div>
  )
}

export const Gallery: FC<GalleryProps> = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false)
  const [isVideoViewerOpen, setIsVideoViewerOpen] = useState(false)
  const [currentVideoSrc, setCurrentVideoSrc] = useState('')

  // Separate images and videos
  const images = items.filter((item) => !isVideoFile(item))
  const imageUrls = images.map((img) => img.url)

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsImageViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setIsImageViewerOpen(false)
  }

  const openVideoViewer = (videoSrc: string) => {
    setCurrentVideoSrc(videoSrc)
    setIsVideoViewerOpen(true)
  }

  const closeVideoViewer = () => {
    setIsVideoViewerOpen(false)
  }

  return (
    <section className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((item) => {
          const isVideo = isVideoFile(item)

          return (
            <div
              key={item.pathname}
              className="relative aspect-square cursor-pointer overflow-hidden rounded shadow-md transition-transform hover:scale-105"
              onClick={() =>
                isVideo
                  ? openVideoViewer(item.url)
                  : openImageViewer(
                      // Find index in the filtered images array
                      images.findIndex((img) => img.url === item.url)
                    )
              }
            >
              <Image
                src={item.url}
                alt={`Gallery item - ${item.pathname}`}
                fill
                className="object-cover"
              />

              {isVideo && (
                <div className="bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black">
                  <div className="bg-opacity-80 rounded-full bg-white p-3">
                    <Play size={24} className="text-black" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {isImageViewerOpen && (
        <ImageViewer
          src={imageUrls}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          closeOnClickOutside={true}
        />
      )}

      {isVideoViewerOpen && (
        <VideoViewer src={currentVideoSrc} onClose={closeVideoViewer} />
      )}
    </section>
  )
}
