'use client'

import { getGalleryImages } from '@/app/actions/getGalleryImages'
import { ListBlobResultBlob } from '@vercel/blob'
import { useEffect, useState } from 'react'

export const useGallery = () => {
  const [images, setImages] = useState<ListBlobResultBlob[]>([])
  const [shotsImages, setShotsImages] = useState<ListBlobResultBlob[]>([])
  const [bodyImages, setBodyImages] = useState<ListBlobResultBlob[]>([])

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

  useEffect(() => {
    console.log(images)
    const fetchedShotsImages = images.filter((image) =>
      image.pathname.startsWith('gallery/shots')
    )
    setShotsImages(fetchedShotsImages)

    const fetchedBodyImages = images.filter((image) =>
      image.pathname.startsWith('gallery/body')
    )
    setBodyImages(fetchedBodyImages)
  }, [images])

  useEffect(() => {
    console.log(shotsImages)
  }, [shotsImages])

  return { images, loading, error, shotsImages, bodyImages }
}
