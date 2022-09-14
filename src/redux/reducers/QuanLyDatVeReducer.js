import { ThongTinLichChieu } from "../../templates/HomeTemplate/CheckoutPage/_core/models/ThongTinPhongVe";
import { SET_CHI_TIET_PHONG_VE, DAT_VE, DAT_VE_DONE } from "../constants";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }
    case DAT_VE: {
      //cap nhat danh sach ghe dang dat
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        if (danhSachGheCapNhat.length < 5) {
          danhSachGheCapNhat.push(action.gheDuocChon);
        }
      }

      console.log(action.gheDuocChon, "ghe dc chon");

      console.log(danhSachGheCapNhat, "ghe cap nhat");

      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    case DAT_VE_DONE: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
