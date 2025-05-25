import React from 'react'

const RateCard = () => {
  const rates = [
    {
      title: 'Photo Session',
      price: 'Starts from Rp 500k/8hr',
      description: 'Pemotretan profesional untuk berbagai keperluan.',
    },
    {
      title: 'Vertical Video Shoot',
      price: 'Starts from Rp 1000k/8hr',
      description:
        'Video pendek format vertikal untuk media sosial. Jumlah video bebas.',
    },
    {
      title: 'Video Shoot with Dialog Script',
      price: 'Starts from Rp 2000k/8hr',
      description: 'Produksi video dengan dialog sesuai kebutuhan.',
    },
  ]

  return (
    <div className="z-1 flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <h1 className="mb-8 border-b border-yellow-500 pb-1 text-left text-xl font-bold tracking-wide uppercase">
        Rate Card - Kennsr
      </h1>
      <div className="grid w-full max-w-2xl gap-6">
        {rates.map((rate, index) => (
          <div
            key={index}
            className="rounded-xl border border-white/30 p-6 shadow-lg transition hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-yellow-500">
              {rate.title}
            </h2>
            <p className="text-lg font-medium text-gray-300">{rate.price}</p>
            <p className="mt-2 text-sm text-gray-400">{rate.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-400">
        *Harga hanya estimasi. Dapat berubah sesuai kesepakatan.
      </p>
    </div>
  )
}

export default RateCard
