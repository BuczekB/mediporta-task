import { useEffect, useState } from 'react'

import FetchData from './Data/FetchData'
import { DataContext } from './Data/DataContext';

import Pagination from '@mui/material/Pagination'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function App() {

  const [data, setData] = useState()
  const [paginationNumb, setPaginationNumb] = useState()
  const [readyTable, setReadyTable] = useState()
  const [numberOfItems, setNumberOfItems] = useState(6)


  useEffect(() =>{
  
    if(data && data.data){
      printData()
    } else{
      console.log('err');
    }
  
  },[data])


 const handlePageChange = (e, page) =>{
  setPaginationNumb(page)
  setReadyTable()
 }

 const printData = () =>{
  const listOfTags =  data.data/**.items**/.map((item) =>{
    return(
      <ListItem key={item.name}>{item.name}</ListItem>
    )
   })
   
   setReadyTable(listOfTags)
 }

 const handleInputChange = (e) =>{
  console.log(e.target.value);
  setNumberOfItems(e.target.value)
 }


  return (
    <DataContext.Provider value={data}>
      <Box  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', }}>
      <TextField
       id="outlined-basic"
        label="Choose limit of items per page"
         variant="outlined"
          type='number'
          onChange={handleInputChange}
          value={numberOfItems} />
        <FetchData
          setData={setData}
          paginationNumb={paginationNumb}
          numberOfItems={numberOfItems}
        />
        <div>
          <List>
       {readyTable? readyTable : <CircularProgress />}
       </List>
        </div>
        <Pagination
        onChange={handlePageChange}
        count={10} />
      </Box>
    </DataContext.Provider>
  )
}

export default App