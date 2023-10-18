import React, { useEffect, useState } from "react";
import { getDetails } from "../Apis/Apis";
import Loading from "../Loading/Loading";
import "../ItemDetails/ItemDetails.css";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  let x = useParams();
  console.log(x.id);

  const [Details, setDetails] = useState("");

  async function getData() {
    let details = await getDetails(x.id, x.media);
    setDetails(details);
  }

  console.log(Details);
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Details ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${Details.poster_path}` ||`https://image.tmdb.org/t/p/w500${Details.profile_path}` }
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-8 px-5">
              <div className="title">
                <h2>
                  {Details.title} || {Details.name}
                </h2>
                <p className="py-3">{Details.tagline}</p>
              </div>
              <div className="genres pb-4">
                {Details.genres.map((value, index) => (
                  <span key={index} className="p-2  mx-2 rounded">
                    {value.name} {value.known_for_department}
                  </span>
                ))}
              </div>
              <div className="vote pt-4">
                <ul>
                  <li>Vote : {Details.vote_average.toFixed(1)} ||{Details.popularity.toFixed(1)}  </li>
                  <li>Vote count : {Details.vote_count} </li>
                  <li>Popularity : {Details.popularity} </li>
                  <li>
                    Release date : {Details.release_date}{" "}
                    {Details.first_air_date}{" "}
                  </li>
                </ul>
              </div>
              <div className="overview py-4">
                <p>{Details.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
