import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { AppProduct } from "./components/AppProduct/AppProduct"

export const App = () => {


    return (
        <div style= {{display: "flex", flexDirection: "column",gap: "1rem"}}>
            {/* <MiPrimerComponent
                text="Hola mundo"
                color="red"
                fontSize={2} />
            <ComponentCounter />
            <ComponentUseEffect /> */}
            {/* <FormComponent /> */}
            <AppProduct/>
            
            
        </div>
    )
}

