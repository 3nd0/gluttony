import Image from 'next/image'

export const Card = ({ img }: { img: string }) => {
  return (
    <div className="h-fit border border-gray-600 rounded-lg">
      <picture>
        <source />
        <div className="flex justify-center">
          <Image
            src={img}
            alt="image of something"
            className="px-2 my-2"
            width={350}
            height={250}
          />
        </div>
      </picture>
      <div className="flex flex-col px-2">
        <div className="flex justify-between">Store name</div>
        <div>location</div>
        <div>店舗名</div>
      </div>
    </div>
  )
}
