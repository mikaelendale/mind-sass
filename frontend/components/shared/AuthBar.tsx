import React from 'react'
import Marquee from '../ui/marquee'
import { logos } from '@/constants'
import Image from 'next/image'

const AuthBar = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border  px-20 md:shadow-xl">
      <div className="flex flex-row w-full gap-4 [perspective:300px] ">
        <Marquee
          className="h-96 w-full justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <Image
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
              width={1000}
              height={1000}
            />
          ))}
        </Marquee>
      </div>
 
      
    </div>
  )
}

export default AuthBar