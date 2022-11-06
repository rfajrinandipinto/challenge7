import React from 'react'

const Whyus = () => {
  return (
    <section className="why-us" id="why-us">
    <div className="container">
      <h2 className="section__title">Why Us?</h2>
      <p className="section__sub-title">Mengapa harus pilih Binar Car Rental?</p>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <img src="image/icon_complete.png" alt="" />
              <h5 className="card-title">Mobil Lengkap</h5>
              <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <img src="image/icon_price.png" alt="" />
              <h5 className="card-title">Harga Murah</h5>
              <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <img src="image/icon_24hrs.png" alt="" />
              <h5 className="card-title">Layanan 24 Jam</h5>
              <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <img src="image/icon_professional.png" alt="" />
              <h5 className="card-title">Sopir Profesional</h5>
              <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Whyus