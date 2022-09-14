import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact" id="lienhe">
      <div className="contact_title">
        Nhận các thông báo khuyến mãi, giảm giá về email của bạn.
      </div>
      <div className="contact_form">
        <form>
          <input
            type="text"
            className="form-control text-black p-4"
            placeholder="Nhập email của bạn..."
            id="joinnow-email"
          />
          <button type="submit" className="contact_form-submit">
            Tham Gia
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
