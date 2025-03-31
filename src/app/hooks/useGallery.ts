'use client'

import { useEffect, useState } from 'react'
import { getGalleryImages } from '@/app/actions/getGalleryImages'
import { ListBlobResultBlob } from '@vercel/blob'

export const useGallery = () => {
  const [images, setImages] = useState<ListBlobResultBlob[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        const fetchedImages = await getGalleryImages()
        setImages(fetchedImages)
      } catch (err) {
        console.error(err)
        setError('Failed to load images.')
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  return { images, loading, error }
}
