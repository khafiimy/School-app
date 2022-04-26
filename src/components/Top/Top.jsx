import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <section className="section-top">
      <div className="container">
        <div className="col-2">
          <div className="top-left">
            {/* <h1 className="greeting-text">Selamat Datang di</h1> */}
            <h1 className="first-text">Pendaftaran Calon Siswa Baru</h1>
            <h1 className="schoolName-text">SMA Negeri 1 Konoha</h1>
            <p className="desc-text">
              Menghadirkan kemudahan akses informasi yang cepat dan tepat, untuk
              dunia pendidikan yang lebih baik.
            </p>
            <h1 className="hastag-text">#AyoDaftar</h1>
            <button className="btn-primary">Daftar Sekarang</button>
            <button className="btn-secondary">Profil Sekolah</button>
          </div>
          <div className="top-right">
            <img
              src="images/topRight2.png"
              className="top-image"
              height="550"
              width="500"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
