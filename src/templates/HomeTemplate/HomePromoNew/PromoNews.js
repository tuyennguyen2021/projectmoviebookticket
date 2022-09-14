import React from "react";
import Banner from "../../../components/Banner";
import "./PromoNews.css";
import { ArrowRightOutlined } from "@ant-design/icons";
function PromoNews() {
  return (
    <div className="container mx-auto text-center" id="tintuc">
      <h2 className="text-2xl text-white font-medium">Khuyến mãi & Tin Tức</h2>
      <div>
        <Banner />
      </div>
      <div className="my-5">
        <div className="morePage_news">
          <div className="morePage_new morePage_news-1 col-md-4 col-lg-4">
            <div className="morePage_title">
              Marvel quyết tạo khác biệt cho phim Spider man và dựa trên các
              nhân vật trong những ấn phẩm của Marvel Comics
            </div>
          </div>
          <div className="morePage_new morePage_news-2 col-md-4 col-lg-4">
            <div className="morePage_title">
              Marvel được "tẩy trắng" nhân vật : Có phải là tiêu chuẩn kép?
            </div>
          </div>
          <div className="morePage_new morePage_news-3 col-md-4 col-lg-4">
            <div className="morePage_title">
              Dù đã qua đời, Paul Walker vẫn đang được cân nhắc để xuất hiện lại
              trong Fast &amp; Furious
            </div>
          </div>
        </div>
        <div className="pageViewer--button my-2 text-md font-semibold text-white hover:text-[#753BBD] cursor-pointer hover:translate-x-2">
          <div className="flex items-center">
            <div className="mr-2 ">Xem Thêm</div>
            <ArrowRightOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoNews;
