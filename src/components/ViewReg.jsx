import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewReg = () => {

    const[data,changeData] = useState([])

            const fetchData = () => {

                    axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(

                        (response) => {

                            changeData(response.data)
                        }
                    ).catch()

            }



    useEffect(


        () => {

                fetchData()
        }, []
    )

  return (
    <div>
<h1 align="center">VIEW STUDENTS</h1>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">

{data.map(

    (value,index) => {


        return(

        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">


<div class="card">
  <div class="card-body">
    <h5 class="card-title">{value.fullName}</h5>
    <p class="card-text">{value.regNo}</p>
    <p class="card-text">{value.branch}</p>
    <p class="card-text">{value.sslcMark}</p>
    <p class="card-text">{value.plusTwoMark}</p>
    <p class="card-text">{value.ugMark}</p>
    <p class="card-text">{value.pgMark}</p>

    <a href="#" class="btn btn-success">VIEW STUDENT</a>
  </div>
</div>

        </div>

        )
    }
)}


    </div>
</div>

        </div>
    </div>
</div>



    </div>
  )
}

export default ViewReg