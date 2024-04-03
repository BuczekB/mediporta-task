import { useState } from 'react'

import FetchData from './Data/FetchData'
import CoutomList from './Components/CustomList'
import ListOfItems from './Components/ListOfItems'
import ErrorPage from './Components/ErrorPage'
import { DataContext } from './Data/DataContext';

import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box';



function App() {

  const [data, setData] = useState()
  const [paginationNumb, setPaginationNumb] = useState()
  const [numberOfItems, setNumberOfItems] = useState(6)
  const [sort, setSort] = useState('');
  const [serch, setSerch] = useState(false);
  const [errorPage, setErrorPage] = useState(false);
 


 const handlePageChange = (e, page) =>{
  setPaginationNumb(page)
 }

 const handleInputChange = (e) =>{
  console.log(e.target.value);
  setNumberOfItems(e.target.value)
 }

 const handleChange = (e) => {
  setSort(e.target.value);
}

const handleSerch = () =>{
  setSerch(!serch)
}


  return (
    <DataContext.Provider value={data}>
      {errorPage? <ErrorPage/> : ''}
      <Box  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', }}>
        <CoutomList
        handleInputChange={handleInputChange}
        handleChange={handleChange}
        handleSerch={handleSerch}
        numberOfItems={numberOfItems}
        sort={sort}
        />
        <FetchData
          setData={setData}
          paginationNumb={paginationNumb}
          numberOfItems={numberOfItems}
          sort={sort}
          serch={serch}
          setErrorPage={setErrorPage}
        />  
          <ListOfItems />
        <Pagination
        onChange={handlePageChange}
        count={10} />
      </Box>
    </DataContext.Provider>
  )
}

export default App