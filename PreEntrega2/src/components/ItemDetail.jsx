const ItemDetail = ({item}) => {
    return (
        <div className="container" id="card-group">
            <div className="row">
                <div key={item.numSerie} className = "col-md-3">
                    <div className="card" id={item.numSerie}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.imagen} className="img-fluid rounded-start" width="80px" alt="..."/>
                            </div>
                            <div className="col-md-8">  
                                <div className="card-body">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <p className="card-text">Autor: {item.autor}</p>
                                    <p className="card-text">Genero:{item.genero}</p>
                                    <p className="card-text">Precio:{item.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                                    <p className="card-text">Stock: {item.stock}</p>
                                    <button type="button" id={item.numSerie} className="boton">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;