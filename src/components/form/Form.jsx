import React from 'react'
import './form.css'
import { useEffect } from 'react'
import { useState } from 'react'



const Form = ({setFormResult}) => {

    const [data,setData] = useState([])
    const [filteredData, setFilteredData] = useState([])

    function fetchData() {
        fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((err) => console.error(err))
    }

    React.useEffect(() => {
        fetchData()
        }, [])


    const handleSubmit = (event) => {
        event.preventDefault()
        const dataDate = new Date (event.target.date.value + ' ' +event.target.time.value )
        const newDate = dataDate.toISOString();
        const capacity = event.target.capacity.value

        const filteredData = data.filter((value) => {
            return value.available == true  && value.capacity > capacity && value.availableAt > newDate
        })

        setFilteredData(filteredData);
        setFormResult(filteredData);

    }

    
   
  return (
    <section className="carForm">
       
    <div className="container">
        <form onSubmit={handleSubmit}>
           <div className="row row-input">
                <div className="col-10 d-flex">
                <div className="col-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Tipe Driver</label>
                    <select className="form-select" aria-label="Default select example" name='driver' required>
                    <option value="1">Dengan Sopir</option>
                    <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className="col-3">
                    <label htmlFor="startDate">Tanggal</label>
                    <input className="form-control" type="date" name="date" id="cars-tanggal" required/>
                </div>
                <div className="col-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Waktu Jemput/Ambil</label>
                    <input type="time" id="cars-waktu" className="form-control" name="time" required/>
                </div>
                <div className="col-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Jumlah Penumpang</label>
                    <input type="number" className="form-control" placeholder="Jumlah Penumpang" name="capacity" id="cars-ukuran" required/>
                </div>
                </div>
                <div className="col-2 align-items-end justify-content-end d-flex">
                <button className="btnSearch" id="btn-search">Cari Mobil</button>
                </div>
            </div> 
        </form>
      
    </div>
  </section>

  
  )
}

export default Form