import Pagination from "../components/Pagination";
import React, { useState, useEffect } from "react";

let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

let sampleMovies = [
  {
    adult: false,
    backdrop_path: "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
    id: 619930,
    title: "Narvik",
    original_language: "no",
    original_title: "Kampen om Narvik",
    overview:
      "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
    poster_path: "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
    media_type: "movie",
    genre_ids: [10752, 18, 36, 28],
    popularity: 321.063,
    release_date: "2022-12-25",
    video: true,
    vote_average: 7.406,
    vote_count: 53,
  },
  {
    adult: false,
    backdrop_path: "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
    id: 804095,
    title: "The Fabelmans",
    original_language: "en",
    original_title: "The Fabelmans",
    overview:
      "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
    poster_path: "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
    media_type: "movie",
    genre_ids: [18],
    popularity: 163.3,
    release_date: "2022-11-11",
    video: false,
    vote_average: 8.02,
    vote_count: 561,
  },
  {
    adult: false,
    backdrop_path: "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
    id: 1035806,
    title: "Detective Knight: Independence",
    original_language: "en",
    original_title: "Detective Knight: Independence",
    overview:
      "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
    poster_path: "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
    media_type: "movie",
    genre_ids: [28, 53, 80],
    popularity: 119.407,
    release_date: "2023-01-20",
    video: false,
    vote_average: 6.6,
    vote_count: 10,
  },
  {
    adult: false,
    backdrop_path: "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
    id: 555604,
    title: "Guillermo del Toro's Pinocchio",
    original_language: "en",
    original_title: "Guillermo del Toro's Pinocchio",
    overview:
      "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
    poster_path: "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
    media_type: "movie",
    genre_ids: [16, 14, 18],
    popularity: 754.642,
    release_date: "2022-11-18",
    video: false,
    vote_average: 8.354,
    vote_count: 1694,
  },
];

function Favourites() {
  let [genres, setGenres] = useState([]);

  let [movies, setMovies] = useState(sampleMovies);

  let [searchItem, setSearchItems] = useState("");

  let [curGenre, setCurrentgenre] = useState("All genre");

  let [curRatingOrder, setRatingOrder] = useState(0);

  let [curPopularityOrder, setPopularityOrder] = useState(0);

  let [noOfElements, setNoOfElements] = useState(2);

  let [curPage, setCurPage] = useState(2);

  /* Delete the Movie */

  const deleteMovies = (id) => {
    const restOfTheMovie = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(restOfTheMovie);
  };

  useEffect(() => {
    let temp = movies.map((movie) => genreids[movie.genre_ids[0]]);

    temp = new Set(temp);
    setGenres(["All genre", ...temp]);
  }, [movies]);

  let onCurGenre = (genre) => {
    setCurrentgenre(genre);
  };

  let searchedMovies =
    searchItem === ""
      ? movies
      : movies.filter((movie) => {
          let movieName = movie.title || movie.name;

          let lowerCharSearch = searchItem.toLowerCase();
          return movieName.toLowerCase().includes(lowerCharSearch);
        });

  /* Filtering the genre for Ui  */ // Step *

  let filteredMovies =
    curGenre === "All genre"
      ? searchedMovies
      : searchedMovies.filter((searchedMovie) => {
          return genreids[searchedMovie.genre_ids[0]] === curGenre;
        });

  // Sorting the Movies

  if (curRatingOrder !== 0) {
    if (curRatingOrder === 1) {
      filteredMovies = filteredMovies.sort((movieA, movieB) => {
        return movieA.vote_average - movieB.vote_average;
      });
    } else if (curRatingOrder === -1) {
      filteredMovies = filteredMovies.sort((movieA, movieB) => {
        return movieB.vote_average - movieA.vote_average;
      });
    }
  }

  //sorting for Popularity Order

  if (curPopularityOrder !== 0) {
    if (curPopularityOrder === 1) {
      filteredMovies = filteredMovies.sort((movieA, movieB) => {
        return movieA.popularity - movieB.popularity;
      });
    } else if (curPopularityOrder === -1) {
      filteredMovies = filteredMovies.sort((movieA, movieB) => {
        return movieB.popularity - movieA.popularity;
      });
    }
  }

  //Pagination In UI

  console.log("Hello Bro " + noOfElements);
  let si = noOfElements * (Number(curPage) - 1);
  let ei = Number(noOfElements) + Number(si);

  let maxPageNum = Math.ceil(filteredMovies.length / noOfElements);

  filteredMovies = filteredMovies.slice(si, ei);

  const onPrev = (pageNum) => {
    if (pageNum > 0) {
      setCurPage(pageNum);
    }
  };

  const onNext = (pageNum) => {
    if (pageNum <= maxPageNum) {
      setCurPage(pageNum);
    }
  };

  return (
    <>
      <div className="mt-6 flex space-x-2  justify-center">
        {genres.map((genre) => {
          return (
            <button
              className={
                genre === curGenre
                  ? `py-1 px-2  rounded-lg text-lg font-bold text-white  bg-blue-400 `
                  : `py-1 px-2 bg-gray-400 rounded-lg text-lg font-bold text-white  hover:bg-blue-400`
              }
              //  { /* The Genre  and UI Communication */ }

              onClick={() => {
                onCurGenre(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex justify-center space-x-2 text-center">
        <input
          type="text"
          placeholder="search"
          className="border-2 py-1  px-2 text-center"
          value={searchItem}
          onChange={(e) => {
            setSearchItems(e.target.value);

            setCurPage(1);
          }}
        />
        <input
          type="number"
          className="border-2 py-1  px-2 text-center"
          value={noOfElements}
          onChange={(e) => {
            setNoOfElements(e.target.value);

            setCurPage(1);
          }}
        />
      </div>

      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    alt="iconimg"
                    class="mr-2 cursor-pointer"
                    onClick={() => {
                      setRatingOrder(1);

                      setCurPage(1);
                    }}
                  ></img>
                  <div>Rating</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    class="ml-2 mr-2"
                    alt="iconimg2"
                    onClick={() => {
                      setRatingOrder(-1);

                      setCurPage(1);
                    }}
                  ></img>
                </div>
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    class="mr-2 cursor-pointer"
                    alt="iconimg3"
                    onClick={() => {
                      setPopularityOrder(1);

                      setCurPage(1);
                    }}
                  ></img>
                  <div>Popularity</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    class="ml-2 mr-2"
                    alt="iconimg4"
                    onClick={() => {
                      setPopularityOrder(-1);
                      setCurPage(1);
                    }}
                  ></img>
                </div>
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Genre
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                Remove
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            {filteredMovies.map((movie) => {
              return (
                <tr class="hover:bg-gray-50" key={movie.id}>
                  <th class="flex items-center  px-6 py-4 font-normal   text-gray-900 space-x-2">
                    <img
                      class="h-[100px] w-[160px] object-fit "
                      src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                      alt=""
                    />

                    <div class="font-medium text-gray-700   text-sm text-center">
                      {movie.title || movie.name}
                    </div>
                  </th>
                  <td class="px-6 py-4 pl-12">{movie.vote_average}</td>
                  <td class="px-6 py-4 pl-12 ">
                    {movie.popularity.toFixed(2)}
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex gap-2">
                      <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                        {genreids[movie.genre_ids[0]]}
                      </span>
                    </div>
                  </td>

                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center gap-1 rounded-full  px-2 py-1 text-xs font-semibold text-red-600
        
        cursor-pointer"
                      /* Delete the Movie */
                      onClick={() => {
                        deleteMovies(movie.id);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination
        pageNum={curPage}
        onPrev={onPrev}
        onNext={onNext}
      ></Pagination>
    </>
  );
}

export default Favourites;
