"use strict";(self.webpackChunkmovie_bookingv2=self.webpackChunkmovie_bookingv2||[]).push([[660],{151:function(e,n,t){t.d(n,{R:function(){return r},T:function(){return i}});var a=t(6721),r={type:a.Fh},i={type:a.Uf}},7719:function(e,n,t){t.d(n,{$Q:function(){return u},RO:function(){return l},iQ:function(){return s}});var a=t(4165),r=t(5861),i=t(4651),o=t(6721),c=t(151),s=function(){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.G.layDanhSachHeThongRap();case 3:200===(t=e.sent).status&&n({type:o.Rq,heThongRapChieu:t.data.content}),console.log(t,"12345"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,null===(r=e.t0.response)||void 0===r?void 0:r.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},u=function(e){return function(){var n=(0,r.Z)((0,a.Z)().mark((function n(t){var r;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(c.R),n.next=4,i.G.layThongTinPhimLichChieuPhim(e);case 4:return r=n.sent,t({type:o.uU,filmDetail:r.data.content}),n.next=8,t(c.T);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},l=function(){return function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.G.layThongTinHeThongRap();case 3:t=e.sent,n({type:o.OH,listHeThongRap:t.data.content}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}},4651:function(e,n,t){t.d(n,{G:function(){return u}});var a=t(3144),r=t(5671),i=t(136),o=t(7277),c=t(9838),s=t(6210),u=new(function(e){(0,i.Z)(t,e);var n=(0,o.Z)(t);function t(){var e;return(0,r.Z)(this,t),(e=n.call(this)).layDanhSachHeThongRap=function(){return e.get("api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=".concat(s.ZG))},e.layThongTinPhimLichChieuPhim=function(n){return e.get("api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=".concat(n))},e.layThongTinHeThongRap=function(){return e.get("/api/QuanLyRap/LayThongTinHeThongRap")},e.layThongTinCumRap=function(n){return e.get("/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=".concat(n))},e}return(0,a.Z)(t)}(c.y))},9838:function(e,n,t){t.d(n,{y:function(){return s}});var a=t(3144),r=t(5671),i=t(4569),o=t.n(i),c=t(6210),s=(0,a.Z)((function e(){(0,r.Z)(this,e),this.put=function(e,n){return o()({url:"".concat(c.yK,"/").concat(e),method:"PUT",data:n,headers:{TokenCybersoft:c.L0,Authorization:"Bearer "+localStorage.getItem(c.o3)}})},this.post=function(e,n){return o()({url:"".concat(c.yK,"/").concat(e),method:"POST",data:n,headers:{TokenCybersoft:c.L0,Authorization:"Bearer "+localStorage.getItem(c.o3)}})},this.get=function(e){return o()({url:"".concat(c.yK,"/").concat(e),method:"GET",headers:{TokenCybersoft:c.L0,Authorization:"Bearer "+localStorage.getItem(c.o3)}})},this.delete=function(e){return o()({url:"".concat(c.yK,"/").concat(e),method:"DELETE",headers:{TokenCybersoft:c.L0,Authorization:"Bearer "+localStorage.getItem(c.o3)}})}}))},9660:function(e,n,t){t.r(n);var a=t(9439),r=t(2791),i=t(141),o=t(7561),c=t(9434),s=t(6871),u=t(3504),l=t(2426),h=t.n(l),d=t(7719),m=t(6403),f=t(184),p=i.Z.TabPane;n.default=function(){var e;(0,r.useEffect)((function(){window.scrollTo(0,0)}));var n=(0,r.useState)("left"),t=(0,a.Z)(n,1)[0],l=(0,c.v9)((function(e){return e.listMovieReducer.filmDetail})),g=(0,s.UO)().id,x=(0,c.I0)();return(0,r.useEffect)((function(){x((0,d.$Q)(g))}),[]),(0,f.jsxs)("div",{style:{backgroundImage:"url(".concat(m,")"),minHeight:"100vh",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[(0,f.jsx)("div",{className:"container mx-auto",children:(0,f.jsxs)("div",{className:"py-20 lg:py-20 px-4 md:px-4  w-full lg:max-w-full md:flex items-center",children:[(0,f.jsx)("div",{className:" w-60 mx-auto md:w-72 lg:w-80 flex-none overflow-hidden",children:(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:l.hinhAnh,alt:"123",className:"h-full w-full rounded-xl mb-4"})})}),(0,f.jsx)("div",{className:"mx-0 lg:mx-[10%]  bg-black bg-opacity-25 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex  justify-between items-center leading-normal",children:(0,f.jsxs)("div",{className:"text-white",children:[(0,f.jsx)("h1",{className:"text-white text-4xl  font-bold",children:l.tenPhim}),(0,f.jsxs)("p",{className:"mt-4",children:["T\xecnh Tr\u1ea1ng:"," ",!0===l.dangChieu?"\u0110ang Chi\u1ebfu":"S\u1eafp Chi\u1ebfu"]}),(0,f.jsx)("p",{className:"mt-4",children:l.moTa}),(0,f.jsxs)("p",{className:"mt-4",children:["\u0110i\u1ec3m IMBb:"," ",l.danhGia&&(0,f.jsx)(o.Z,{disabled:!0,defaultValue:l.danhGia,count:10})]})]})})]})}),(0,f.jsx)("div",{className:"container mx-auto w-full bg-white rounded-xl py-10 lg:w-4/5",children:!0===l.sapChieu?(0,f.jsx)("div",{className:"text-center text-red-600 text-xl",children:"Phim ch\u01b0a c\xf3 l\u1ecbch chi\u1ebfu!!"}):(0,f.jsx)(i.Z,{tabPosition:t,className:"overflow-y-scroll h-[300px]",children:null===(e=l.heThongRapChieu)||void 0===e?void 0:e.map((function(e,n){var t;return(0,f.jsx)(p,{tab:(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsx)("img",{src:e.logo,className:"rounded-full w-14 ml-4"}),(0,f.jsx)("div",{className:"ml-4 hidden lg:block",children:e.tenHeThongRap})]}),children:null===(t=e.cumRapChieu)||void 0===t?void 0:t.map((function(e,n){var t;return(0,f.jsxs)("div",{className:"mt-5",children:[(0,f.jsxs)("div",{className:"flex flex-row",children:[(0,f.jsx)("img",{style:{width:60,height:60},src:"https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",className:"w-14"}),(0,f.jsxs)("div",{className:"ml-3",children:[(0,f.jsx)("p",{className:"font-bold",children:e.tenCumRap}),(0,f.jsx)("p",{children:e.diaChi})]})]}),(0,f.jsx)("div",{className:"thong-tin-lich-chieu grid grid-cols-4 ",children:null===(t=e.lichChieuPhim)||void 0===t?void 0:t.slice(0,18).map((function(e,n){return(0,f.jsx)(u.OL,{to:"/checkout/".concat(e.maLichChieu),className:"mt-4",children:(0,f.jsx)("button",{className:"font-bold rounded-sm border border-gray-200 p-2 text-green-700  text-xs bg-[#fafafa] hover:text-[#fb4226] mr-2",children:h()(e.ngayChieuGioChieu).format("hh:mm A")})},n)}))})]},n)}))},n)}))})})]})}},6403:function(e,n,t){e.exports=t.p+"static/media/backgroundBook.39ce3f1dd884e2e295be.jpg"}}]);
//# sourceMappingURL=660.f8a71660.chunk.js.map