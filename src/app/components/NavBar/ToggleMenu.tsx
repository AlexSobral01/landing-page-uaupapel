"use client"

import Link from 'next/link'
import { useState } from "react"
import MobileMenu from './MobileMenu'
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

export default function ToggleMenu() {

  const [showToggle, setShowToggle] = useState(false)

  return (
    <>
      <button className="z-30 md:hidden" onClick={() => setShowToggle(!showToggle)}>
        <MobileMenu />
      </button>
      <div className={showToggle? "bg-slate-900 md:hidden flex flex-col py-5 px-16 absolute top-0 right-0 duration-500 z-20": "aboslute hidden"}>
        <ul className="flex md:hidden flex-col gap-8 px-16 pt-20 h-screen">
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Home</Link></li>
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Serviços</Link></li>
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Produtos</Link></li>
          <li><Link href={'/'} className="text-white hover:text-slate-300 border border-black border-b-white duration-300">Contato</Link></li>
          <ul className='flex gap-2 justify-center'>
            <li><a href="https://www.instagram.com/uau.papel/"><FaInstagram color="white" size={20} /></a></li>
            <li><a href="https://wa.me/5511989937882"><FaWhatsapp color="white" size={20} /></a></li>
          </ul>
        </ul>
      </div>
    </>
  )
}
