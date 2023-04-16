import React, { useEffect, useState } from 'react'
import { getTrending } from '../Apis/Apis'
import Items from '../Items/Items'

export default function Tv() {

    const [Tv, setTv] = useState([])

    async function getData() {
        let tv = await getTrending('tv')
        setTv(tv)
    }
     
    

    useEffect(() => {
      getData()  
      
    }, [])

  return (
    <>
      <div className="container p-2 my-5">
            <div className="row">
                {Tv.map((value,index)=><Items key={index} data={value}/>)}
            </div>
        </div>
    </>
  )
}
