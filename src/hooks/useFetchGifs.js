import { useEffect, useState } from "react"
import {getGif} from '../helpers/getGifs'

//custom hook
export const useFetchGifts = (category)=>{


    const [state, setstate] = useState({
        data: [],
        loading: true
    });


    useEffect(()=>{
        getGif( category )
            .then(imgs=>{
                setstate({
                    data: imgs,
                    loading: false
                });
          
            })
        

    }, [category])


    return state; //{data:[], loading: true} estado actual 

}