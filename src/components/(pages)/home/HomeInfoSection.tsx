'use client'

import { FC } from 'react'
import { differenceInYears } from 'date-fns'

const HomeInfoSection: FC = () => {
  const birthDate = new Date('2003-11-22')
  const age = differenceInYears(new Date(), birthDate)

  const heightCm = 173
  const heightInches = heightCm / 2.54
  const feet = Math.floor(heightInches / 12)
  const inches = Math.round(heightInches % 12)

  return (
    <section className="flex w-full justify-center text-white">
      <div className="relative w-full overflow-hidden rounded-lg p-8 shadow-2xl">
        <div className="relative">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-12">
            <div className="flex flex-col items-center border-b border-gray-700 pb-4 md:items-end md:border-r md:border-b-0 md:pr-6">
              <span className="text-sm tracking-wider text-gray-400 uppercase">
                Age
              </span>
              <span className="mt-2 text-lg font-light">{age} years old</span>
            </div>

            <div className="flex flex-col items-center pb-4 md:items-start md:pl-6">
              <span className="text-sm tracking-wider text-gray-400 uppercase">
                Birth Date
              </span>
              <span className="mt-2 text-lg font-light">22 November 2003</span>
            </div>

            <div className="flex flex-col items-center border-b border-gray-700 pb-4 md:items-end md:border-r md:border-b-0 md:pr-6">
              <span className="text-sm tracking-wider text-gray-400 uppercase">
                Height
              </span>
              <span className="mt-2 text-lg font-light">
                {heightCm} cm ({feet}&#39;{inches}&#34;)
              </span>
            </div>

            <div className="flex flex-col items-center pb-4 md:items-start md:pl-6">
              <span className="text-sm tracking-wider text-gray-400 uppercase">
                Location
              </span>
              <span className="mt-2 text-lg font-light">Bekasi, Indonesia</span>
              <span className="text-sm font-light text-gray-400">
                (near Jakarta)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInfoSection
