import React from 'react'
import { Link } from 'react-router-dom';
import '../Items/Items.css'

export default function Items(props) {

    let { title, poster_path, vote_average, overview, name ,id ,media_type , profile_path} = props.data;

    return (
        <>
            <div className="col-md-2">
                <div >
                    <div className="item position-relative overflow-hidden">
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className='w-100' />
                        <Link to={`/details/${media_type}/${id}`}>
                            <div className="overlay d-flex align-items-center text-center p-2">
                                <p>{overview.split(' ').splice(0, 10).join(' ')}</p>
                            </div>
                        </Link>
                        <div className="rating p-2">
                            <p>{vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                    <div>
                        <h6 className='my-3 text-center'>{title} {name}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
