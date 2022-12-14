import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useServices(8);
    return (
        <div id='services' className='container mt-5'>
            <h1 > Our Services</h1>
            <hr/>
            <div className='row'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
         </div>
        </div>
    );
};

export default Services;