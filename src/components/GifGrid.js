import React  from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    //Usando desesctructuracion.
    const {loading, data:images} =useFetchGifts(category);
   
    return (
    <>
        <h3 className="animate__animated animate__pulse">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Cargando...</p> }

        <div className="card-grid">
        {images.map(img =>
            <GifGridItem
            key={img.id}
            {...img}/>
            )}
        </div>
    </>
    )
}
