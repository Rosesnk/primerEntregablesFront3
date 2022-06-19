import React from 'react'
import Item from './Item'
import './data.json'
import { ContainerDiv } from '../Styles/Styles';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
export default function Listado({ comprar, vender, stock }) {
  const data = require("./data.json");  


  return (
    <ContainerDiv>
      {data.map((producto) => (
        <div key={producto.id}>
          <Item
            nombre={producto.producto.nombre}
            descripcion={producto.producto.descripcion}
            comprar={comprar}           
            stock={producto.stock}
            img={producto.producto.img}
          />
        </div>
      ))}
    </ContainerDiv>
  );
}
