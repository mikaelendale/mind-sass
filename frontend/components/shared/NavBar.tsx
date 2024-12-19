import React from 'react'
import Image from 'next/image'

import { Button } from '../ui/button'
import { navLinks } from '@/constants'
import Link from 'next/link'
import MobileNav from './MobileNav'


const NavBar = () => {
  return (
    <section
    className="flex px-3 py-2  items-center gap-5 bg-white/20 backdrop-blur-lg border border-white/10 rounded-xl shadow-md"
    style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)", 
        backdropFilter: "blur(10px)", 
        WebkitBackdropFilter: "blur(10px)",
        height: '5rem'
    }}
>
    <div className="flex-grow">
        <Image
            src={'/assets/images/studimg-black.png'}
            alt="studmind logo"
            width={200}
            height={40}
        />
    </div>
    <div className="flex gap-3 items-center ml-6">
        <div className="mx-3">
            <ul className="flex gap-7 text-gray-300 text-md flex-nowrap whitespace-nowrap">
                {navLinks.map((link) => (
                    <Link href={link.href} key={link.title} className="">
                        <li className="">{link.title}</li>
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flex gap-3 ml-[17rem] items-center">
            <Button
                type="button"
                className="bg-purple-gradient bg-cover capitalize rounded-full text-md py-[0.5rem] px-[1rem] "
            >
                Get Started
            </Button>
        </div>
    </div>
    <MobileNav />
</section>

  )
}

export default NavBar