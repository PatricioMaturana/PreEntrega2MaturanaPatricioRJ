import { useEffect, useState } from "react";
import listaProductos from "../json/listadoLibros.json";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = ({item}) => {
    const [item, setItem] = useState([]);

    useEffect(()=>{
        const promesa = new Promise(resolve => {
            setTimeout(()=> {
                let productos = listaProductos.find(item => item.numSerie==1); 
                resolve(producto);
            },2000)
        })
        promesa.then(data =>{setItem(data);
            })
    },[]);
    
    return (
        <ItemDetail item={item} /> 
    )
}

export default ItemDetailContainer;