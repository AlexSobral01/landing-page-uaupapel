import { ReactNode } from "react";

interface textProps {
  title: string,
  paragraph: string,
  children: ReactNode
}

const CardSection = ({title, paragraph, children}: textProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      {children}
      <h4 className="font-semibold text-lg">{title}</h4>
      <p>{paragraph}</p>
    </div>
  )
}

export default CardSection;