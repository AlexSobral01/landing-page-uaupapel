import { LiaPiggyBankSolid } from "react-icons/lia";
import { CiDeliveryTruck, CiTrophy } from "react-icons/ci";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="h-96 bg-bgHeader bg-cover">
        <div className="h-full bg-black/20"></div>
      </header>
      <main className="">
        <section className="py-28 px-8 md:px-20">
          <div className="flex justify-between gap-14 md:gap-36">
            <div className="flex flex-col items-center text-center">
              <LiaPiggyBankSolid size={40} className="font-thin" />
              <p className="font-semibold text-lg">Custo beneficio</p>
              <p>Economize com a gente</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CiDeliveryTruck size={40} />
              <p className="text-lg font-semibold">Entrega rápida</p>
              <p>Entregamos delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <CiTrophy size={40}/>
              <p className="font-semibold text-lg text-center">Campeão de vendas</p>
              <p className="text-center">Somos os melhores</p>
            </div>
          </div>
        </section>
        <section className="bg-yellow-200/40 w-full flex flex-col items-center py-10">
          <div className="h-full w-4/6">
            <Image src={'/assets/aspas.png'} alt="quote_mark" width={50} height={50} />
            <p className="text-slate-800/70">&ldquo; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam earum illum praesentium commodi! Totam autem delectus iste assumenda sit nemo, deleniti aliquam ab ratione! Deserunt doloribus optio dolores cumque. &rdquo;</p>
            <Image src={'/assets/commentsPic.jpg'} alt="CommentPic" width={80} height={80} className="h-[80px] rounded-full m-auto my-4" />
          </div>
        </section>
      </main>
    </>
  )
}
