import React, { useEffect, useState } from 'react';
import listaProductos from "../json/listadoLibros.json";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import Items from "./items";
const ItemListContainer = () => 
{
   /*
    const [item,setItem] = useState([]);
    const [id] = useParams();
    
    useEffect(() => {

        const promesa = new Promise(resolve => {
            setTimeout(()=> {
                resolve(id ? listaProductos.filter(item => item.genero==id) : listaProductos); 
            },2000)
        })
    
        promesa.then(data =>{
            setItem(data);
        })
    },[id]);
   
    return (
       <>
            (id ? "": <Items />)
            <Items />
        </>

    )
*/
}

export default ItemListContainer;
