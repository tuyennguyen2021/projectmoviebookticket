import {
  GET_LIST_MOVIE,
  GET_CHI_TIET_PHIM,
  GET_DANH_SACH_PHIM_KEYWORD,
  SET_THONG_TIN_PHIM,
} from "../constants";
const initialState = {
  arrListMovie: [
    {
      maPhim: 1338,
      tenPhim: "Fight for my way",
      biDanh: "fight-for-my-way",
      trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
      moTa: "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2021-04-06T07:07:38.223",
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],

  filmDetail: {},
  arrFilmSearch: [],
  arrFilmDefault: [],
  thongTinPhim: {},
};

export const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MOVIE: {
      state.arrListMovie = action.arrListMovie;
      state.arrFilmDefault = state.arrListMovie;

      return { ...state };
    }
    case GET_DANH_SACH_PHIM_KEYWORD: {
      state.arrFilmSearch = action.arrFilmSearch;
      state.arrFilmDefault = state.arrFilmSearch;
      return { ...state };
    }
    case GET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
