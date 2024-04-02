import { useEffect, useState } from 'react'

import FetchData from './Data/FetchData'
import { DataContext } from './Data/DataContext';

import Pagination from '@mui/material/Pagination'


function App() {

  const [data, setData] = useState()
  const [paginationNumb, setPaginationNumb] = useState()
  const [readyTable, setReadyTable] = useState()


  useEffect(() =>{
  
    if(data && data.data){
      printData()
    } else{
      console.log('err');
    }
  
  },[data])


 const handlePageChange = (e, page) =>{
  setPaginationNumb(page)
  
 }

 const printData = () =>{
  const listOfTags =  data.data.items.map((item) =>{
    return(
      <span key={item.name}>{item.name}</span>
    )
   })
   
   setReadyTable(listOfTags)
 }

 


  return (
    <DataContext.Provider value={data}>
        <FetchData
          setData={setData}
          paginationNumb={paginationNumb}
        />
       <Pagination
        onChange={handlePageChange}
        count={10} />
        <div>
       {readyTable}
        </div>
    </DataContext.Provider>
  )
}

export default App