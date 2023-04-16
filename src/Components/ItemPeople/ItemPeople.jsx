import React, { useState } from 'react'
import { getTrending } from '../Apis/Apis'
import { Link } from 'react-router-dom';

const ItemPeople = (props) => {

    let { id , name , profile_path  , media_type} = props.data;

  return (
    <>
        <div className="col-md-2">
                <div >
                    <div className="item position-relative overflow-hidden">
                        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} className='w-100' />
                        <Link to={`/details/${media_type}/${id}`}>
                            <div className="overlay d-flex align-items-center justify-content-center p-2">
                                <p>{name}</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h6 className='my-3 text-center'>{name}</h6>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ItemPeople