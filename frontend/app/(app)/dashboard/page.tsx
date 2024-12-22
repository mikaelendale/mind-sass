/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { featureLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Page = ()=> {
  return (
    <SidebarProvider >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 hover:bg-none" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <section className="home">
          <h1 className="home-heading">
            Empower Your Mind. Redefine Your Learning
          </h1>
          <ul className="flex-center w-full gap-20">
            {featureLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="flex-center flex-col gap-2"
              >
                {/* {link.msg && <p>{link.msg}</p>} */}
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.img} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-white">{link.name}</p>                
              </Link>
            ))}
          </ul>
      </section>
      <section className="flex flex-col items-center justify-center text-center mt-[5rem] gap-2">
            <Image src='/assets/icons/folder.png' alt="folder" width={50} height={50}/>
            <p className="text-lg text-white">No Space hasn&apos;t created yet!</p> 
            <Button className=" bg-purple-gradient text-lg rounded-sm">Create Space</Button>
      </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Page