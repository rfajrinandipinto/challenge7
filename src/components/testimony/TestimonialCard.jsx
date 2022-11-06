import React from 'react'

const TestimonialCard = () => {
  return (
    <div style={{width: "619px", marginInline: "16px"}}>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3 testimony__profile">
                        <img src="image/img_photo.png" alt="" />
                      </div>
                      <div className="col-md-9">
                        <div className="rating d-flex">
                          <img src="image/star.png" alt="" />
                          <img src="image/star.png" alt="" />
                          <img src="image/star.png" alt="" />
                          <img src="image/star.png" alt="" />
                          <img src="image/star.png" alt="" />
                        </div>
                        <p className="testimony__text">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod”
                        </p>
                        <p className="testimony__name">John Dee 32, Bromo</p>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default TestimonialCard