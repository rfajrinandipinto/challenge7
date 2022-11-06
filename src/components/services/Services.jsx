import React from 'react'

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-end section__image">
            <img src="image/service-img.png" alt="" />
          </div>
          <div className="col-md-6 section__desc">
            <h2 className="section__title">Best Car Rental for any kind of trip in Yogyakarta!</h2>
            <p className="section__sub-title">
              Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="p-0">
              <li className="d-flex">
                <img src="image/services-list-icon.png" alt="" />
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </li>
              <li className="d-flex">
                <img src="image/services-list-icon.png" alt="" />
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </li>
              <li className="d-flex">
                <img src="image/services-list-icon.png" alt="" />
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </li>
              <li className="d-flex">
                <img src="image/services-list-icon.png" alt="" />
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </li>
              <li className="d-flex">
                <img src="image/services-list-icon.png" alt="" />
                <p>Layanan Airport Transfer / Drop In Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services