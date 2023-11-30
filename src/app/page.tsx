import { LiaPiggyBankSolid } from "react-icons/lia";
import { CiDeliveryTruck, CiTrophy } from "react-icons/ci";
import CardSection from "./components/CardSection";
import Carousel from "./components/Carousel/carousel";

export default function Home() {
  return (
    <>
      <header className="h-96 bg-bgHeader bg-cover">
        <div className="h-full bg-black/30"></div>
      </header>
      <main className="">
        <section className="py-24 px-8 md:px-20">
          <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-36">
            <CardSection title="Custo beneficio" paragraph="Economize com a gente">
              <LiaPiggyBankSolid size={40} />
            </CardSection>
            <CardSection title="Entrega rápida" paragraph="Entregamos delivery">
              <CiDeliveryTruck size={40} />
            </CardSection>
            <CardSection title="Campeão de vendas" paragraph="Somos os melhores">
              <CiTrophy size={40}/>
            </CardSection>
          </div>
        </section>
        <section className="bg-yellow-200/40 w-full flex justify-center py-10">
          {/* <div className="overflow-hidden w-4/6 flex">
            <div className="h-full">
              <Image src={'/assets/aspas.png'} alt="quote_mark" width={50} height={50} />
              <p className="text-slate-800/70">&ldquo; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam earum illum praesentium commodi! Totam autem delectus iste assumenda sit nemo, deleniti aliquam ab ratione! Deserunt doloribus optio dolores cumque. &rdquo;</p>
              <Image src={'/assets/commentsPic.jpg'} alt="CommentPic" width={60} height={60} className="h-[60px] rounded-full m-auto my-4" />
            </div>
          </div> */}
          <Carousel />
        </section>
      </main>
    </>
  )
}
