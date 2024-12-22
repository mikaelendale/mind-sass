

'use client'
import React from 'react'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { cn } from '@/lib/utils'
import GridPattern from '../ui/grid-pattern';
import { Button } from '../ui/button';
import AvatarCircles from '../ui/avatar-circles';
import { avatars, footer, plans, userNum } from '@/constants';
import Safari from '../ui/safari';
import { MarqueeDemo } from './Trusted';
import { Features } from './Features';
import NavBar from './NavBar';
import Link from 'next/link';
import Image from 'next/image';
import { ReviewCardDemo } from './ReviewCard';
import CallAction from './CallAction';

const LandingPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
    <NavBar/>    
    <section>
    <div className="relative flex flex-col md:flex-row h-auto md:h-[500px] mt-10 w-full px-3 gap-8 md:gap-[5rem] items-center overflow-hidden rounded-lg">
  {/* Left Section */}
  <div className="flex-wrap w-full md:w-[50%] flex flex-col gap-8">
    <p className="pointer-events-none bg-gradient-to-b from-white to-gray-300/50 text-bold bg-clip-text text-center text-3xl md:text-5xl font-bold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Transform the Way You Study with AI-Powered Tools
    </p>
    <p className="text-lg md:text-xl px-3 mx-auto">
      Generate flashcards, mind maps, practice questions, and podcasts from your study materials in seconds. Supercharge your learning with StudMind.ai
    </p>
    <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start px-3">
      <Link href="/login">
        <Button
          type="button"
          className="bg-purple-gradient bg-cover capitalize rounded-full text-lg md:text-xl py-4 px-6"
        >
          Get Started
        </Button>
      </Link>
      <Link href="#features">
        <Button
          type="button"
          className="bg-black-gradient bg-cover capitalize rounded-full text-lg md:text-xl py-4 px-6"
        >
          Explore Features
        </Button>
      </Link>
    </div>
    <div className="mt-4 flex flex-wrap gap-3 pl-4 items-center justify-center md:justify-start">
      <p className="text-lg md:text-xl">Trusted by over {userNum}+ Students</p>
      <AvatarCircles numPeople={99} avatarUrls={avatars} />
    </div>
  </div>

  {/* Illustration Section */}
  <div className="w-full md:w-[50%] mt-6 md:mt-0 flex justify-center">
    <DotLottieReact
      src="https://lottie.host/500382da-9cfa-4b14-8741-7f15ad6703f8/ZJlognYiyX.lottie"
      loop
      autoplay
      width={200}
      height={200}
    />
  </div>

  {/* Background Grid */}
  <GridPattern
    squares={[
      [4, 4],
      [5, 1],
      [8, 2],
      [5, 3],
      [5, 5],
      [10, 10],
      [12, 15],
      [15, 10],
      [10, 15],
      [15, 10],
      [10, 15],
      [15, 10],
    ]}
    className={cn(
      "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
      "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
    )}
  />
</div>

        <div className='relative mt-40 px-5 py-3'>
            <Safari
                url="magicui.design"
                className="size-full"
                src="https://cdn.dribbble.com/userupload/12507232/file/original-8a8589c9576e4e538ed484207c655625.jpg?resize=1504x1128&vertical=center"
            />
        </div>
        <div className='relative mt-20 px-3 flex-col flex justify-center items-center bg-black '>
            <p className=' text-gray-300 text-4xl '>Trusted by top students all over the world</p>
           <MarqueeDemo/> 
        </div>
        <div className='relative bg-black flex flex-col items-center justify-center text-gray-300'>
          <div className='flex flex-col items-center text-center justify-center gap-5 my-5'>
              <p className=' text-md'>Features</p>
              <p className=' text-5xl font-bold'>Everything You Need to Ace Your Learning Journey</p>
              <p className=' text-xl'>Discover the tools that make studying smarter, faster, and more engaging</p>
          </div>
          <div className='relative px-6' id='features'>
            <Features/>
          </div>
        </div>
        <div id="pricing" className="bg-black py-10 mt-[10rem]">
  <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
    Master your learning and make every second count
  </h2>
  <h2 className="text-lg md:text-2xl text-center mb-6">
    Unlock unlimited content, messages, spaces, and PDF uploads
  </h2>
  <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-8 justify-center mt-[3rem]">
    {plans.map((plan) => (
      <div
        key={plan._id}
        className="bg-black text-white rounded-lg shadow-md  md:w-[20rem] w-[25rem] h-[35rem] md:h-[30rem] border shadow-gray-500 p-6 flex flex-col"
      >
        <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
        <p className="text-gray-300 mb-4">{plan.desc}</p>
        <p className="text-3xl md:text-4xl font-bold mb-6">
          ${plan.price}
          <span className="text-lg md:text-xl font-normal text-gray-300">
            /month
          </span>
        </p>
        <ul className="mb-6 flex-grow">
          {plan.inclusions.map((inc) => (
            <li key={inc.label} className="flex items-center mb-2 gap-2">
              <Image
                src={`/assets/icons/${
                  inc.isIncluded ? "check.svg" : "cross.svg"
                }`}
                alt="check"
                width={24}
                height={24}
              />
              <p>{inc.label}</p>
            </li>
          ))}
        </ul>
        <Button className="bg-purple-gradient text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
          Choose Plan
        </Button>
      </div>
    ))}
  </div>
</div>

        <div className='relative'>
          <ReviewCardDemo/>
        </div>
        <div className='relative h-full'>
          <CallAction/>
        </div>
        <footer className="flex flex-col md:flex-row items-center justify-between px-5 py-5 text-white bg-black">
  {/* Left Section */}
  <div className="text-center md:text-left mb-4 md:mb-0">
    <p className="text-gray-300">&copy; Copyright {currentYear}, StudMind</p>
  </div>

  {/* Right Section */}
  <ul className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 gap-3">
    {footer.map((link) => (
      <Link href={link.route} key={link._id}>
        <li className="hover:text-gray-300 text-center">{link.label}</li>
      </Link>
    ))}
  </ul>
</footer>

    </section>
    </>
  )
}

export default LandingPage