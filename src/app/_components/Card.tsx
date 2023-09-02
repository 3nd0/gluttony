import Image from 'next/image'

export const Card = ({ img }: { img: string }) => {
  return (
    <div className="h-96 border border-gray-600 rounded-lg">
      <picture>
        <source />
        <div className="flex justify-center">
          <Image
            src={img}
            alt="image of something"
            className="px-2 my-2"
            width={300}
            height={250}
          />
        </div>
      </picture>
    </div>
  )
}
