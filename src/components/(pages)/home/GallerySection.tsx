'use client'

import { useGallery } from '@/app/hooks/useGallery'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC } from 'react'
import { Gallery } from '../shared/Gallery'

const GalleryTabs = [
  {
    label: 'Shots',
    value: 'shots',
  },
  {
    label: 'Body',
    value: 'body',
  },
]

export const GallerySection: FC = () => {
  const { shotsImages, bodyImages } = useGallery()

  return (
    <Tabs defaultValue="shots" className="flex h-fit w-full justify-center">
      <TabsList className="flex w-full rounded-none">
        {GalleryTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="dark:data-[state=active]:bg-yellow-500/ rounded-none data-[state=active]:bg-yellow-500"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="shots">
        <Gallery images={shotsImages} />
      </TabsContent>
      <TabsContent value="body">
        <Gallery images={bodyImages} />
      </TabsContent>
    </Tabs>
  )
}
