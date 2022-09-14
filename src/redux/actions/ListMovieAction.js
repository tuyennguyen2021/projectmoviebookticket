import {
  GET_LIST_MOVIE,
  GET_DANH_SACH_PHIM_KEYWORD,
  SET_THONG_TIN_PHIM,
} from "../constants";
import { filmService } from "../../services/FilmServices";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import Swal from "sweetalert2";

export const getListMovieAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await filmService.getListFilm();
      dispatch({
        type: GET_LIST_MOVIE,
        arrListMovie: result.data.content,
      });
      await dispatch(hideLoadingAction);
      console.log(result, "result");
    } catch (error) {
      console.log(error);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await filmService.layThongTinPhim(maPhim);

      dispatch({
        type: SET_THONG_TIN_PHIM,
        thongTinPhim: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const layDanhSachPhimKeyWordAction = (keyword) => {
  return async (dispatch) => {
    try {
      const result = await filmService.layDanhSachPhimKeyWord(keyword);
      dispatch({
        type: GET_DANH_SACH_PHIM_KEYWORD,
        arrFilmSearch: result.data.content,
      });
    } catch (errors) {
      console.log(errors, "errors");
    }
  };
};

export const themMoiPhimAction = (formData, navigate) => {
  return async () => {
    try {
      const result = await filmService.themMoiPhim(formData);
      if (result.data.statusCode === 200) {
        await Swal.fire({
          title: "Thêm mới thành công!",
          icon: "success",
          html: "Tự động chuyển sang danh sách phim sau 3 giây",
          timer: 3000,
          timerProgressBar: true,
          confirmButtonText: "Ok",
        });
        navigate(-1, { replace: true });
      }
    } catch (errors) {
      Swal.fire({
        title: "Error!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "Thử lại",
      });
    }
  };
};

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Bạn chắc chắn xoá phim này?",
        text: "Thao tác sẽ không thể hoàn lại",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Chắc chắn",
      }).then((result) => {
        if (result.isConfirmed) {
          filmService.xoaPhim(maPhim);
          Swal.fire("Đã xoá", "Phim của bạn đã được xoá", "success");
          dispatch(getListMovieAction());
        }
      });
    } catch (errors) {
      Swal.fire({
        title: "Error!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "Thử lại",
      });
    }
  };
};

export const capNhatPhimAction = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const result = await filmService.capNhatPhimUpload(formData);
      if (result.data.statusCode === 200) {
        await Swal.fire({
          title: "Cập nhật thành công!",
          icon: "success",
          html: "Tự động chuyển sang danh sách phim sau 3 giây",
          timer: 3000,
          timerProgressBar: true,
          confirmButtonText: "Ok",
        });
        await dispatch(getListMovieAction());
        navigate("/admin/films", { replace: true });
      }
    } catch (errors) {
      Swal.fire({
        title: "Error!",
        text: errors.response.data.content,
        icon: "error",
        confirmButtonText: "Thử lại",
      });
    }
  };
};
