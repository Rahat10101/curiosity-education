import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { _id,name, about, picture } = props.service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
    <div className='col-sm-12 col-md-6 col-lg-6 '>
            <div class="card" >
        <img src={picture} class="card-img-top" alt="..." style={{objectFit:'cover',height:'500px'}}/>
            <div class="card-body">
                    <h2 class="card-text">{ name}</h2>
            
              <p class="card-text">{about}</p>
                    <button className='btn btn-outline-dark mx-2' onClick={()=>navigateToServiceDetail(_id)}>View Details</button>
                    <button className='btn btn-outline-dark' onClick={()=>navigate('/checkout')}>Take Course</button>
           </div>
       </div> 
    </div> 
           
    );
};

export default Service;