import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../templates/HomeTemplate/CheckoutPage/_core/models/ThongTinDatVe";
import Swal from "sweetalert2";
import { DAT_VE_DONE, SET_CHI_TIET_PHONG_VE } from "../constants";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
      await dispatch(hideLoadingAction);
      console.log(result, "result");
    } catch (errors) {
      console.log(errors.reponse?.data, "errors");
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      if (result.status === 200) {
        let timerInterval;
        await Swal.fire({
          title: "Đặt vé thành công!!!",
          html: "Chúc bạn xem phim vui vẻ",
          timer: 3000,
          timerProgressBar: false,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
        console.log(result.data.content);
        await dispatch({ type: DAT_VE_DONE });
        await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
        await dispatch(hideLoadingAction);
      }
    } catch (errors) {
      dispatch(hideLoadingAction);
      console.log(errors.reponse.data);
    }
  };
};
