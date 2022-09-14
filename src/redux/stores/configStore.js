import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { listMovieReducer } from "../reducers/ListMovieReducer";
import { bannerReducer } from "../reducers/BannerReducer";
import { listTheaterReducer } from "../reducers/ListTheaterReducer";
import { quanLyNguoiDungReducer } from "../reducers/UsersReducer";
import { QuanLyDatVeReducer } from "../reducers/QuanLyDatVeReducer";
import { LoadingReducer } from "../reducers/LoadingReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  //state
  listMovieReducer,
  bannerReducer,
  listTheaterReducer,
  quanLyNguoiDungReducer,
  QuanLyDatVeReducer,
  LoadingReducer,
});

export const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);
