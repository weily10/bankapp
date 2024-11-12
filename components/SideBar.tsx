'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2">
             <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              className='size-[24px] max-xl:size-14'
              alt='Logo' />
            <h1 className='sidebar-logo '>
              YouBank
            </h1>
         </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (<Link href={item.route} key={item.label}
            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
            <div className='relative size-6'>
              <Image src={item.imgURL} alt={item.label} fill className={cn({ 'brightness-[3] invert-0': isActive })}></Image>
            </div>
            <p className={cn("sidebar-label", { "!text-white": isActive })}>
              {item.label}
            </p>
          </Link>)
        })}
      </nav>
    </section>
  )
}

export default SideBar