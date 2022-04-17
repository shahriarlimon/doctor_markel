import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SelectedService = () => {
    const {appointmentID} = useParams()
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`service.json` )
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    return (
        <div>
            <h1>Your selected service:{services?.length}</h1>
        </div>
    );
};

export default SelectedService;