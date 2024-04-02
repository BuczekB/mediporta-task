import { useEffect } from 'react'


import axios from 'axios'


const FetchData =   ({setData, paginationNumb=1, numberOfItems=6 }) =>{
   
  


 
  useEffect(() =>{

  

    const fetchRespone = async () =>{
      try{
        const responseFetch = await axios({
          method: 'get',
          url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false',
          params: {page: paginationNumb, pagesize: numberOfItems}
      })
        .then(res => setData(res))
      }catch(err){
          console.log(err);
      }
    }

   

    setTimeout(() => fetchRespone(), 1000);
  
  
  },[paginationNumb])

  //https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow

  return (
    <div></div>
  )
}

export default FetchData