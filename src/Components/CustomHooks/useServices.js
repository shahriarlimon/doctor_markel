import React, { useEffect, useState } from 'react';

const useServices = () => {
 const [services, setServices] = useState([]);
 useEffect(()=>{
     fetch('https://shahriarlimon.github.io/jsonapi/services.json' )
     .then(res=>res.json())
     .then(data=>setServices(data));
 },[])
    return [services, setServices];
};

export default useServices;