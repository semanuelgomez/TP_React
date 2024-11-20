import { Header } from './Header/Header'
import { FormProduct } from './FormProduct/FormProduct'
import { useState } from 'react'
import { ListProducts } from './ListProducts/ListProducts'
interface ItemProduct {
    imagen: string
    nombre: string
    precio: number
}
export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([])
    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts((prev) => [...prev, newItem])
    }

    return (
        <div>
            <Header />
            <h2 className='text-center'>Carga de Productos</h2>
            <FormProduct handleAddProduct={handleAddProduct} />
            <h2 className='text-center'>Productos</h2>
            {
                products.length > 0 ? <ListProducts arrItems={products} /> : <h3 className='text-center'>No hay productos</h3>
            }
        </div>
    )
}
