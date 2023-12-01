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
      <main>
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
          <Carousel />
        </section>
      </main>
    </>
  )
}
