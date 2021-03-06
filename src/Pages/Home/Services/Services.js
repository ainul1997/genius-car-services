import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='Services' className='container' >
            <div className='row'>
                <h2 className='services-title text-center'> Our Services</h2>
                <div className='services-containar'>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>

            </div>


        </div>
    );
};

export default Services;