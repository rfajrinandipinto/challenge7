import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="address col-4">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="quick-access col-2">
            <a href="#services"><p>Our services</p></a>
            <a href="#why-us"><p>Why Us</p></a>
            <a href="#testimony"> <p>Testimonial</p></a>
            <a href="#faq"><p>FAQ</p></a>
          </div>
          <div className="contact col-3">
            <p>Connect with us</p>
            <ul>
              <li><img src="image/icon_facebook.png" alt="" /></li>
              <li><img src="image/icon_instagram.png" alt="" /></li>
              <li><img src="image/icon_twitter.png" alt="" /></li>
              <li><img src="image/icon_mail.png" alt="" /></li>
              <li><img src="image/icon_twitch.png" alt="" /></li>
            </ul>
          </div>
          <div className="copyright col-3">
            <p>Copyright Binar 2022</p>
            <img src="image/BCR.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer