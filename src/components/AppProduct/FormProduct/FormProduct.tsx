import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react"
interface IPropsFormProduct {
    handleAddProduct: Function
}
export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProduct }) => {
    const { values, handleChange, resetForm } = useForm({
        imagen: "",
        nombre: "",
        precio: 0
    })

    const handleSubmitForm = () => {
        handleAddProduct(values)
        resetForm()
    }
    return (
        <Form className="p-4 border rounded m-3">
            <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Nombre del producto" value={values.nombre} onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formImagen"></Form.Group>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="text" name="imagen" placeholder="Imagen del producto" value={values.imagen} onChange={handleChange} />

            <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precio" placeholder="Precio del producto" value={values.precio} onChange={handleChange} />
            </Form.Group>
            <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" onClick={handleSubmitForm}>
                    Agregar Producto
                </Button>
                <Button variant="secondary" onClick={resetForm}> Reset</Button>
            </div>
        </Form>
    )
}
