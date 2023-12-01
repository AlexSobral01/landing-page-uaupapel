import Link from "next/link";
import { FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="h-52 bg-slate-800 text-white">
      <div className="px-10 pb-4 pt-6">
        <div className="flex justify-between">
          <ul>
            <h4 className="font-semibold">Site map</h4>
            <li><Link href={'/'} className="text-slate-300 hover:text-slate-500 text-sm duration-300">Home</Link></li>
            <li><Link href={'/'} className="text-slate-300 hover:text-slate-500 text-sm duration-300">Serviços</Link></li>
            <li><Link href={'/'} className="text-slate-300 hover:text-slate-500 text-sm duration-300">Produtos</Link></li>
            <li><Link href={'/'} className="text-slate-300 hover:text-slate-500 text-sm duration-300">Contato</Link></li>
          </ul>
          <nav>
            <h4 className="font-semibold mb-2">Faça seu pedido!</h4>
            <ul className="flex gap-2 justify-center">
              <li><a href={"https://www.instagram.com/uau.papel/"}><FaInstagram color="white" size={20} /></a></li>
              <li><a href={"https://wa.me/5511989937882"}><FaWhatsapp color="white" size={20} /></a></li>
            </ul>
          </nav>
        </div>
      </div>
        <hr />
        <div className="my-1 pl-4">
          <p className="flex items-center text-slate-200">&copy; copyright {new Date().getFullYear()}. Direitos reservados a uau papel</p>
        </div>


    </footer>
  )
}
