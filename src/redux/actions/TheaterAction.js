import { theaterService } from "../../services/TheaterService";
import {
  GET_CHI_TIET_PHIM,
  GET_LIST_THEATER,
  LAY_DS_CR,
  LAY_DS_HTR,
} from "../constants";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await theaterService.layDanhSachHeThongRap();
      if (result.status === 200) {
        dispatch({
          type: GET_LIST_THEATER,
          heThongRapChieu: result.data.content,
        });
      }
      console.log(result, "12345");
    } catch (error) {
      console.log(error, error.response?.data);
    }
  };
};

export const layThongTinChiTietPhimAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await theaterService.layThongTinPhimLichChieuPhim(id);
      dispatch({
        type: GET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
      await dispatch(hideLoadingAction);
    } catch (error) {
      console.log(error);
    }
  };
};

export const layThongTinHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await theaterService.layThongTinHeThongRap();
      dispatch({
        type: LAY_DS_HTR,
        listHeThongRap: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const layThongTinCumRapAction = (value) => {
//   return async (dispatch) => {
//     try {
//       const result = await theaterService.layThongTinCumRap(value);
//       dispatch({
//         type: LAY_DS_CR,
//         listCumRap: result.data.content,
//       });
//       console.log(result, "09090");
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
