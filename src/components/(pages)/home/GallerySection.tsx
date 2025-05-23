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
  {
    label: 'Videoshoot',
    value: 'videoshoot',
  },
  {
    label: 'Photo Grid',
    value: 'photo-grid',
  },
]

export const GallerySection: FC = () => {
  const { shotsItems, bodyItems, videoshootItems, photoGridItems } =
    useGallery()

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
        <Gallery items={shotsItems} />
      </TabsContent>
      <TabsContent value="body">
        <Gallery items={bodyItems} />
      </TabsContent>
      <TabsContent value="videoshoot">
        <Gallery items={videoshootItems} />
      </TabsContent>
      <TabsContent value="photo-grid">
        <Gallery items={photoGridItems} />
      </TabsContent>
    </Tabs>
  )
}
