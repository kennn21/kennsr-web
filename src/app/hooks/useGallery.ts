'use client'

import { getGalleryImages } from '@/app/actions/getGalleryImages'
import { ListBlobResultBlob } from '@vercel/blob'
import { useEffect, useState } from 'react'

export const useGallery = () => {
  const [items, setImages] = useState<ListBlobResultBlob[]>([])
  const [shotsItems, setShotsItems] = useState<ListBlobResultBlob[]>([])
  const [bodyItems, setBodyItems] = useState<ListBlobResultBlob[]>([])
  const [videoshootItems, setVideoshootItems] = useState<ListBlobResultBlob[]>(
    []
  )

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
        setError('Failed to load items.')
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    const fetchedShotsImages = items.filter((image) =>
      image.pathname.startsWith('gallery/shots')
    )
    setShotsItems(fetchedShotsImages)

    const fetchedBodyImages = items.filter((image) =>
      image.pathname.startsWith('gallery/body')
    )
    setBodyItems(fetchedBodyImages)

    const fetchedVideoshootItems = items.filter((image) =>
      image.pathname.startsWith('gallery/videoshoot')
    )
    setVideoshootItems(fetchedVideoshootItems)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return { items, loading, error, shotsItems, bodyItems, videoshootItems }
}
