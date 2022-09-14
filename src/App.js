import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";

const Page404 = lazy(() => import("./components/404page/Page404"));
const BookingHistory = lazy(() => import("./components/BookingHistory"));
const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const Checkout = lazy(() =>
  import("./templates/HomeTemplate/CheckoutPage/Checkout")
);
const Detail = lazy(() => import("./templates/HomeTemplate/DetailPage"));
const HomePage = lazy(() =>
  import("./templates/HomeTemplate/HomePage/HomePage")
);
const Register = lazy(() =>
  import("./templates/HomeTemplate/RegisterHomePage")
);

const AdminTemplate = lazy(() => import("./templates/AdminTemplate"));
const AddFilm = lazy(() => import("./templates/AdminTemplate/Films/AddFilm"));
const Users = lazy(() => import("./templates/AdminTemplate/Users/Users"));
const AddUser = lazy(() => import("./templates/AdminTemplate/Users/AddUser"));
const Films = lazy(() => import("./templates/AdminTemplate/Films/Films"));
const EditFilm = lazy(() => import("./templates/AdminTemplate/Films/EditFilm"));
const ShowTime = lazy(() =>
  import("./templates/AdminTemplate/Showtime/ShowTime")
);
const EditUser = lazy(() => import("./templates/AdminTemplate/Users/EditUser"));

function App() {
  return (
    <>
      <Router>
        <Loading />
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* home page */}
            <Route path="/" element={<HomeTemplate />}>
              <Route path="" element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="/detail/:id" element={<Detail />} />
            </Route>
            <Route path="/history" element={<BookingHistory />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="*" element={<Page404 />} />

            {/* admin page */}
            <Route path="/admin" element={<AdminTemplate />}>
              <Route path="/admin/films" element={<Films />} />
              <Route path="/admin/films/addnew" element={<AddFilm />} />
              <Route path="/admin/films/edit/:id" element={<EditFilm />} />
              <Route
                path="/admin/films/showtime/:id/:tenphim"
                element={<ShowTime />}
              />
              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/users/addnew" element={<AddUser />} />
              <Route path="/admin/users/edit/:tk" element={<EditUser />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
