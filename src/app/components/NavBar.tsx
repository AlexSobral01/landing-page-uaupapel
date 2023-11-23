import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="h-80 bg-background bg-cover">
      <div className="bg-slate-800/30 h-full">
        <nav className="py-2 px-4 flex justify-between items-center">
          <Link href={'/'} className="py-4 px-2 bg-black rounded-full">
            <Image 
              src={'/logo-uaupapel.jpg'} 
              alt="logo-uaupapel" 
              width={40} 
              height={40} 
              className="" 
            />
          </Link>
          <ul className="flex gap-4">
            <li><Link href={'/'} className="text-slate-50 hover:text-slate-200 duration-300">Home</Link></li>
            <li><Link href={'/'} className="text-slate-50 hover:text-slate-200">Serviços</Link></li>
            <li><Link href={'/'} className="text-slate-50 hover:text-slate-200">Produtos</Link></li>
            <li><Link href={'/'} className="text-slate-50 hover:text-slate-200">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
