"use client"

import Link from 'next/link'
import { useState } from "react"
import MobileMenu from './MobileMenu'

export default function ToggleMenu() {

  const [showToggle, setShowToggle] = useState(false)

  return (
    <>
      <button className="z-10 md:hidden" onClick={() => setShowToggle(!showToggle)}>
        <MobileMenu />
      </button>
      <div className={showToggle? "bg-slate-900 md:hidden flex flex-col px-10 py-5 absolute top-0 right-0 duration-500": "hidden aboslute -right-72"}>
        <ul className="flex md:hidden flex-col gap-8 px-32 pt-20 h-screen">
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Home</Link></li>
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Serviços</Link></li>
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Produtos</Link></li>
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Contato</Link></li>
        </ul>
      </div>
    </>
  )
}
