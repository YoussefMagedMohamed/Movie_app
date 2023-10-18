import React, { useEffect, useState } from 'react'
import { getTrending } from '../Apis/Apis'
import Items from '../Items/Items'

export default function Movies() {

  const [Movies, setMovies] = useState([])

  async function getData() {
      let movies = await getTrending('movie')
      setMovies(movies)
  }  

  useEffect(() => {
    getData()  
    
  }, [])
  return (
    <>
      <div className="container p-2 my-5">
            <div className="row">
                
                {Movies.map((value,index)=><Items key={index} data={value}/>)}
            </div>
        </div>
    </>
  )
}
