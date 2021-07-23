export  const getGif = async(category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}=10&api_key=tfIqc4DpukIYBsZeLP5auxiAXKWRbbsF`;
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            }
         })

    return gifs
  
}