import { FC } from "react"
import { Card } from "react-bootstrap"

interface ItemProduct {
  imagen: string
  nombre: string
  precio: number
}

interface IPropsListProducts {
  arrItems: ItemProduct[]
}
export const ListProducts: FC<IPropsListProducts> = ({ arrItems }) => {
  return (
    <div className="p-1 m-3 border rounded d-grid gap-2"
    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", display: "grid", justifyItems: "center", alignItems: "center"}}>
       
        {
            arrItems.map((el,i) => (
                <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.imagen} />
                <Card.Body>
                  <Card.Title>{el.nombre}</Card.Title>
                  <Card.Text>${el.precio}</Card.Text>
                </Card.Body>
              </Card>
            ))
        }
    </div>

  )
}
