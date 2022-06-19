
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import React, { useState } from "react";
import {
  Boton,
  ProductImage,
  Producto,
  StockSpan,
  Description,
} from "../Styles/Styles";

const Item = ({ nombre, descripcion, comprar, stock, img }) => { 
  const [cantidad, setCantidad] = useState(stock);  
  
  const buy = (arg) => {
    if (arg === "comprar" && cantidad > 0) {
      comprar(prevState => prevState + 1) 
      setCantidad(prevState => prevState - 1)  
    }
  } 
  
  return (
    <Producto>
      <h3>{ nombre }</h3>
      <p>{ descripcion }</p>
      <ProductImage src={img} alt={ nombre } />
      <h5>
        En Stock: <StockSpan className={cantidad === 0?"spanAgotado":""}>{cantidad > 0 ? cantidad : "Agotado" }</StockSpan>
      </h5>
      <Boton disabled={cantidad===0 } onClick={() => buy("comprar")}>{cantidad === 0 ? "sin stock":"comprar"}</Boton>
    </Producto>
  );
}

export default Item;



