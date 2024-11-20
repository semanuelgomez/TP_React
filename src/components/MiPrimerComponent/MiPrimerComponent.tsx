import { FC } from "react"


interface MiPrimerComponentProps {
    text:string
    color:string
    fontSize?:number
}



export const MiPrimerComponent: FC<MiPrimerComponentProps> = ({text,color,fontSize}) => {
  return (
    <div style={{color: `${color}`, fontSize: `${fontSize}rem`}}>
    <p>{text}</p>
    </div>
  )
}
