import React from 'react'
import { Header, Card } from './_components'

const cardSample = [
  {
    img: '/images/best+2009-2015.jpg',
  },
  {
    img: '/images/FACT.jpg',
  },
  {
    img: '/images/SHADOWS Progress.jpg',
  },
  {
    img: '/images/Witness.jpg',
  },
  {
    img: '/images/ランドマーク.jpg',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-10 my-4">
        <div className="grid grid-cols-4 gap-4">
          {cardSample.map((contents: { img: string }, index: number) => (
            <React.Fragment key={index}>
              <Card img={contents.img} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
