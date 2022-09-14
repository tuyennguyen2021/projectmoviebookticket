import { MAGRPHIM } from "../utils/config";
import { baseService } from "./baseService";

export class FilmsServices extends baseService {
  constructor() {
    super();
  }
  getListFilm = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${MAGRPHIM}`);
  };
  getListBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };
  layDanhSachPhimKeyWord = (keyword) => {
    return this.get(
      `api/QuanLyPhim/LayDanhSachPhim?maNhom=${MAGRPHIM}&tenPhim=${keyword}`
    );
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
  themMoiPhim = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };
  xoaPhim = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
  capNhatPhimUpload = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };
}

export const filmService = new FilmsServices();
