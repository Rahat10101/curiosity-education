
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

import useService from '../../hooks/useService';



const ServiceDetails = () => {
    const navigate = useNavigate();
    const { serviceId } = useParams();
    const [{name,picture,about,_id}, setService] = useService(serviceId);



    return (
        <div className="container-fluid ">
                <h1 >
                    <title>Service | {name} - Curiosity Education</title>
                </h1>
                <div class="card" >
                    <img src={picture} class="card-img-top" alt="..." style={{ objectFit: 'cover', height: '500px' }} />
                    <div class="card-body">
                        <h2 class="card-text">{name}</h2>

                        <p class="card-text">{about}</p>
                       
                        <button className='btn btn-outline-dark' onClick={()=>navigate('/checkout')}>Take Course</button>
                    </div>
                </div>
            
        </div>
    );
};

export default ServiceDetails;