import { useEffect } from 'react'


import axios from 'axios'


const FetchData =   ({setData, paginationNumb=1 }) =>{
   
  


 
  useEffect(() =>{

  

    const fetchRespone = async () =>{
      try{
        const responseFetch = await axios({
          method: 'get',
          url: 'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow',
          params: {page: paginationNumb, pagesize: 10}
      })
        .then(res => setData(res))
      }catch(err){
          console.log(err);
      }
    }

   

    setTimeout(() => fetchRespone(), 1000);
  
  
  },[paginationNumb])

  

  return (
    <div></div>
  )
}

export default FetchData