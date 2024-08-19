import "./App.css";
// import Navbar from "./components/Navbar";
// import Banner from "./components/Banner";
// import Movies from "./components/Movies";
// import Favorite from "./components/Favorite";
// import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader.jsx";

import { Suspense, lazy } from "react";

const NavbarComponent = lazy(() => import("./components/Navbar.jsx"));
const MoviesComponent = lazy(() => import("./components/Movies.jsx"));

const BannerComponent = lazy(() => import("./components/Banner.jsx"));
const FavouriteComponent = lazy(() => import("./components/Favorite.jsx"));

const PageNotfoundComponent = lazy(() =>
  import("./components/PageNotFound.jsx")
);

//Implementing lazy laoding Here

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div>
              {" "}
              <Loader />
            </div>
          }
        >
          <NavbarComponent />
        </Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div>
                    {" "}
                    <Loader />
                  </div>
                }
              >
                <BannerComponent />
                <MoviesComponent />
              </Suspense>
            }
          ></Route>

          <Route
            path="/fav"
            element={
              <Suspense
                fallback={
                  <div>
                    {" "}
                    <Loader />
                  </div>
                }
              >
                <FavouriteComponent />
              </Suspense>
            }
          >
            {" "}
          </Route>

          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div>
                    {" "}
                    <Loader />
                  </div>
                }
              >
                <PageNotfoundComponent />
              </Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
