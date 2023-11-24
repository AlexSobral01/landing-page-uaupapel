import Image from "next/image";
import Link from "next/link";
import ToggleMenu from "./ToggleMenu";

export default function NavBar() {

  return (
    <nav className="fixed">
      <div className="flex justify-between items-center bg-black/60 w-screen px-6 py-2">
        <Link href={'/'} className="py-4 px-3 bg-black rounded-full">
          <Image 
            src={'/logo-uaupapel.jpg'} 
            alt="logo-uaupapel" 
            width={40} 
            height={40} 
          />
        </Link>
        <ul className="hidden md:flex gap-4">
          <li><Link href={'/'} className="text-slate-50 hover:text-slate-200 duration-300">Home</Link></li>
          <li><Link href={'/'} className="text-slate-50 hover:text-slate-200 duration-300">Serviços</Link></li>
          <li><Link href={'/'} className="text-slate-50 hover:text-slate-200 duration-300">Produtos</Link></li>
          <li><Link href={'/'} className="text-slate-50 hover:text-slate-200 duration-300">Contato</Link></li>
        </ul>
        <ToggleMenu />
      </div>
    </nav>
  )
}
