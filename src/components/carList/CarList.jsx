import React from 'react'
import "./carList.css"

const CarList = ({formResult}) => {
    

    const data = formResult

    console.log(data);

  return (
    

    <section className="car-list" id="car-list">
    <div className="container">
      <div className="row"> {

            Object.keys(data).map((index) =>{

              return (
                <div className="col-md-4 car-card" key={index}>
                  <div className="card">
                    <div className="card-body d-flex">
                      <div className="car-image-container">
                      <img src={data[index].image} alt="" className='car-img img-fluid'/>
                      </div>
                      
                      <h5 className="card-title">{data[index].manufacture + " " + data[index].model }</h5>
                      <p className="car-rent">Rp {data[index].rentPerDay.toLocaleString()} / hari</p>
                      <p className="card-text">{data[index].options}</p>
                      <div className="car-capacity">
                        <i className="bi bi-people"></i>
                        <p>{data[index].capacity} orang</p>
                      </div>
                      <div className="car-transmision">
                        <i className="bi bi-gear"></i>
                        <p>{data[index].transmission}</p>
                      </div>
                      <div className="car-year">
                      <i className="bi bi-calendar"></i>
                        <p>Tahun {data[index].year}</p>
                      </div>
                      <button className='button-car'>
                        Pilih Mobil
                      </button>
                      
                    </div>
                  </div>
                </div>

              )

              

            })
        
      }

        
      </div>
    </div>
  </section>

    // <div>
    //   { Object.keys(data).length != 0 ? (

        


        
    //   }
      
    

    // </div>
    
    
  )
}

export default CarList