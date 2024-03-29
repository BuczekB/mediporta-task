import { useEffect } from 'react'


import axios from 'axios'


const FetchData = ({setData, page = 1}) =>{
   
  useEffect(() =>{
     getData()
  },[])

  const getData = (page) =>{
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false',
      params: {page: page}
  })
    .then(res => setData(res.data))
    .catch(err => console.error(err))

  }

  return (
    <div>FetchData</div>
  )
}

export default FetchData