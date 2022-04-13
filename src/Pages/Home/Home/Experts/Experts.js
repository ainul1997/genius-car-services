import React from 'react';
import expert1 from '../../../../images/Expert1.jpg';
import expert2 from '../../../../images/Expert2.jpg';
import expert3 from '../../../../images/Expert3.jpg';
import expert4 from '../../../../images/Expert4.jpg';
import expert5 from '../../../../images/Expert5.jpg';
import expert6 from '../../../../images/Expert6.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'will Smith', img: expert1 },
    { id: 2, name: 'Axon hoe', img: expert2 },
    { id: 3, name: 'Doxe mun', img: expert3 },
    { id: 4, name: 'Sdeed sun', img: expert4 },
    { id: 5, name: 'Reba jole', img: expert5 },
    { id: 6, name: 'Kosi bose', img: expert6 }

]
const Experts = () => {
    return (
        <div id='Experts' className='container'>
            <h3 className=' text-primary text-center'> Our Experts</h3>
            <div className='row ' >
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;