import { useEffect } from 'react'


import axios from 'axios'


const FetchData =   ({setData, paginationNumb=1, numberOfItems=6, sort='name', serch, setErrorPage }) =>{
   
  useEffect(() =>{

    const fetchRespone = async () =>{
      try{
        const responseFetch = await axios({
          method: 'get',
          url: 'https://api.stackexchange.com/2.3/tags?fromdate=946684800&order=desc&site=stackoverflow',
          params: {page: paginationNumb, pagesize: numberOfItems, sort: sort}
      })
        .then(res => {
          setData(res)
          setErrorPage(false)
        })
      }catch(err){
          console.log(err);
          setErrorPage(true)
      }
    }
    
    setTimeout(() => fetchRespone(), 1000);
  },[paginationNumb, serch])

  

  return (
    <div></div>
  )
}

export default FetchData