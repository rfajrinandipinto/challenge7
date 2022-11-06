import React from 'react'

const Header = () => {
  return (
    <header className="hero">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12">
          <h1>Sewa & Rental Mobil Terbaik di kawasan Yogyakarta</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <a className="nav-link" aria-current="page" href="/cars"><button type="button" className="btn button--green">Mulai Sewa Mobil</button></a>
        </div>
        <div className="col-md-6 p-0">
          <img src="image/main-section-image.png" alt="" />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header