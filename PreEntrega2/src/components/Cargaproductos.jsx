import React, { useEffect, useState } from 'react';
import listaLibros from '../json/listadoLibros.json';

const Cargaproductos = () => 
{
    const agregarCards = (arreglo) => 
    {
    
      const cardGroup = document.getElementById('card-group');
      arreglo.forEach((e) => 
      {
        const card = document.createElement('div');
        card.className = 'card';
        card.id = e.numSerie;
        card.innerHTML = `
        <div>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${e.imagen}" class="img-fluid rounded-start" width="80px" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${e.titulo}</h5>
                <p class="card-text">Autor: ${e.autor}</p>
                <p class="card-text">Genero: ${e.genero}</p>
                <p class="card-text">Precio: ${e.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                <p class="card-text">Stock: ${e.stock}</p>
                <button type="button" id="${e.numSerie}" class="boton">Comprar</button>
              </div>
            </div>
          </div>
        </div> `;

        cardGroup.appendChild(card); 
      });

    };

    useEffect(() => {
      agregarCards(listaLibros);
    }, []);

    return (
      <div>
        <div id="card-group"></div>
        <div id="itemsCarrito"></div>
      </div>
    );
};

export default Cargaproductos;
