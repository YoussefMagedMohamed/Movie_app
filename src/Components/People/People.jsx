import React, { useEffect, useState } from 'react'
import { getTrending } from '../Apis/Apis';
import ItemPeople from '../ItemPeople/ItemPeople';

export default function People() {

  const [People , setPeople] = useState([]);

  async function getData()  {
    let people = await getTrending('person')
    setPeople(people)
  } 

  useEffect(() => {
    getData()
  },[])
  

  return (
    <>

        <div className="container p-2 my-5">
            <div className="row">
                <div className="col-md-4 p-3 welcome">
                    <div className="border w-25"></div>
                    <h2 className='pt-5'>Trending <br /> actors <br /> To follow Now</h2>
                    <p className='pt-3'>Most watched actors by days</p>
                    <div className="border w-75 mt-5"></div>
                </div>
                {People.map((value,index)=><ItemPeople key={index} data={value}/>)}
            </div>
        </div>
    </>
  )
}
