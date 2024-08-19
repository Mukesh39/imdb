import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "./Pagination";
// import Upnext from "./Upnext"; // this is building stage

const Movies = () => {
  let [movies, setMovies] = useState([]);
  const [pageNum, setPage] = useState(1);
  const [hovered, setHovered] = useState();
  let [favourites, setFavourites] = useState([]);

  /* This for Only Making Api request   */
  useEffect(
    function () {
      (function () {
        axios
          .get(
            "https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=c329e49ea66541c60669781b65c43433&page=" +
              pageNum
          )
          .then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results);
          });
      })();
    },
    [pageNum]
  );

  /* Pagination Handeling */
  const onPrev = () => {
    if (pageNum > 1) {
      setPage(pageNum - 1);
    }
  };

  const onNext = () => {
    setPage(pageNum + 1);
  };

  /* emoji Handelin */

  const showEmoji = (id) => {
    setHovered(id);
  };

  const hideEmoji = () => {
    setHovered("");
  };

  /* Add emoji and Remove emoji */

  const addEmoji = (id) => {
    const newfav = [...favourites, id];
    setFavourites(newfav);
  };

  const removeEmoji = (id) => {
    const filteredFav = favourites.filter((elem) => {
      return elem !== id;
    });

    setFavourites(filteredFav);
  };

  return (
    <div className="mt-8">
      <div className=" mb-8 font-bold text-2xl text-center  ">Trendings</div>
      <div className="flex justify-center  flex-wrap ">
        {movies.length === 0 ? (
          <div className="flex justify-center">
            <Oval
              height="80"
              width="80"
              radius="9"
              color="gray"
              secondaryColor="gray"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />{" "}
          </div>
        ) : (
          movies.map((movie) => {
            return (
              <div
                onMouseOver={() => {
                  showEmoji(movie.id);
                }}
                onMouseLeave={() => {
                  hideEmoji(movie.id);
                }}
                key={movie.id}
                className="flex justify-center  flex-wrap "
              >
                <div
                  className="w-[160px] h-[30vh] md:h-[40vh] md:w-[180px]  rounded-xl m-4 hover:scale-110 duration-300 border-4   
    bg-center
    bg-cover 
    flex items-end  relative"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path})`,
                  }}
                >
                  <div
                    className="bg-gray-900  p-2  absolute top-2 right-2 rounded-xl"
                    style={{
                      display: hovered === movie.id ? "block" : "none",
                    }}
                  >
                    {favourites.includes(movie.id) === false ? (
                      <div
                        className="text-2xl"
                        onClick={() => {
                          addEmoji(movie.id);
                        }}
                      >
                        🥰
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          removeEmoji(movie.id);
                        }}
                        className="text-2xl"
                      >
                        ❌
                      </div>
                    )}
                  </div>

                  <div className=" text-xl text-white  bg-gray-900 p-2 bg-opacity-100  text-center w-full  rounded-b-xl  font-bold">
                    {movie.title || movie.name}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Pagination
        pageNum={pageNum}
        onNext={onNext}
        onPrev={onPrev}
      ></Pagination>
    </div>
  );
};

export default Movies;
