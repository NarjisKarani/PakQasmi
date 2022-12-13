import {useState, useEffect} from 'react';

const useFetch = (url)=>{
    const [memberdata, setMemberdata] = useState(null);
    const [girlsmemberdata, setGirlsmemberdata] = useState(null);
    const [boysmemberdata, setBoysmemberdata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errMessage, setErrorMessage] = useState(null);
    const deleteMember = (id)=>{
      setMemberdata(memberdata.filter(item=>item._id!=id))
    }; 
    const updateMember = (id)=>{
      setMemberdata(memberdata.filter(item=>item._id!==id))
    }  
    
    useEffect(() => {
      console.log('Use effect is being used')
      fetch(url).then((response) => {
        if(!response.ok){
          throw new Error('An error occurred while fetching  users. Please contact side admin.')
        }
        return response.json();
       }).then((response) => {
        setMemberdata(response);
        setGirlsmemberdata(response);
        setBoysmemberdata(response);
        setIsLoading(false);
        setErrorMessage(null)
       }).catch((error) => {
       setErrorMessage(error.message);
       setIsLoading(false);
     });
    }, [url]);
    return {memberdata, isLoading, errMessage, girlsmemberdata, boysmemberdata, deleteMember, updateMember};    
}

export default useFetch;