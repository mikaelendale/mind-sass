/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header bg-background w-full">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/studmind.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
       

          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image 
                  src="/assets/images/studmind.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />

              <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.href === pathname

                return (
                  <li 
                    className={`${isActive && 'gradient-text'}  flex whitespace-nowrap text-dark-700`}
                    key={link.href}
                    >
                    <Link className="sidebar-link cursor-pointer" href={link.href}>
                      
                      {link.title}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        
      </nav>
    </header>
  )
}

export default MobileNav