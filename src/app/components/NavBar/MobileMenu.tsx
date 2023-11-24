"use client"

import { useState } from 'react'

export default function MobileMenu() {
  const [click, setClick] = useState(false)

  return (
    <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setClick(!click)}>
      <span className={!click? "h-[4px] w-7 bg-white rounded duration-300" : "h-[4px] w-8 bg-white rounded translate-y-2 rotate-45 duration-300"}></span>
      <span className={!click? "h-[4px] w-7 bg-white rounded": "opacity-0 w-7 translate-x-3 duration-500 ease-in-out"}></span>
      <span className={!click? "h-[4px] w-7 bg-white rounded duration-300": "h-[4px] w-8 bg-white rounded -translate-y-[5px] -rotate-45 duration-300"}></span>
    </div>
  )
}
