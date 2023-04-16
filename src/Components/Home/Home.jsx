import React, { useEffect, useState } from "react";
import Items from "../Items/Items";
import Loading from "../Loading/Loading";
import { Offline, Online } from "react-detect-offline";
import Disconnected from "../Disconnected/Disconnected";
import { getTrending } from "../Apis/Apis";
import ItemPeople from "../ItemPeople/ItemPeople";

export default function Home() {
  const [Movies, setMovies] = useState([]);
  const [Tv, setTv] = useState([]);
  const [People, setPeople] = useState([]);

  async function getData() {
    let movies = await getTrending("movie");
    setMovies(movies);

    let tv = await getTrending("tv");
    setTv(tv);

    let people = await getTrending('person')
    setPeople(people)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Offline>
        {" "}
        <Disconnected />{" "}
      </Offline>
      {Movies.length > 0 || Tv.length > 0 ? (
        <>
          {" "}
          <div className="container p-2 my-5">
            <div className="row">
              <div className="col-md-4 p-3 welcome">
                <div className="border w-25"></div>
                <h2 className="pt-5">
                  Trending <br /> Movies <br /> To Watch Now
                </h2>
                <p className="pt-3">Most watched movies by days</p>
                <div className="border w-75 mt-5"></div>
              </div>
              {Movies.map((value, index) => (
                <Items key={index} data={value} />
              ))}
            </div>
          </div>
          <div className="container p-2 my-5">
            <div className="row">
              <div className="col-md-4 p-3 welcome">
                <div className="border w-25"></div>
                <h2 className="pt-5">
                  Trending <br /> Tv <br /> To Watch Now
                </h2>
                <p className="pt-3">Most watched movies by days</p>
                <div className="border w-75 mt-5"></div>
              </div>
              {Tv.map((value, index) => (
                <Items key={index} data={value} />
              ))}
            </div>
          </div>
          <div className="container p-2 my-5">
            <div className="row">
              <div className="col-md-4 p-3 welcome">
                <div className="border w-25"></div>
                <h2 className="pt-5">
                  Trending <br /> actors <br /> To follow Now
                </h2>
                <p className="pt-3">Most watched actors by days</p>
                <div className="border w-75 mt-5"></div>
              </div>
              {People.map((value, index) => (
                <ItemPeople key={index} data={value} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
