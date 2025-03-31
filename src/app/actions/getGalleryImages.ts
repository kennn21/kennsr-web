'use server'

import * as Blob from '@vercel/blob'

const validateImage = async (url: string) => {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    return res.ok && res.headers.get('content-type')?.startsWith('image')
  } catch {
    return false
  }
}

export const getGalleryImages = async () => {
  const { blobs } = await Blob.list({
    token: process.env.VERCEL_BLOB_READ_WRITE_TOKEN!,
  })

  // Validate images
  const validBlobs = (
    await Promise.all(
      blobs.map(async (blob) => ((await validateImage(blob.url)) ? blob : null))
    )
  ).filter(Boolean) as Blob.ListBlobResultBlob[]

  return validBlobs
}
