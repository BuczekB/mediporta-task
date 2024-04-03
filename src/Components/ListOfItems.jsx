import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Data/DataContext'



import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function ListOfItems() {

    const data = useContext(DataContext)

    const [readyTable, setReadyTable] = useState()

    useEffect(() =>{
  
        if(data && data.data){
          printData()
        } else{
          console.log('err');
        }
      
      },[data])

   

    const printData = () =>{

        console.log(data.data);
      
        const listOfTags =  data.data.items.map((item) =>{
          return(
            <List key={item.name}>
              <ListItem >Name: {item.name}</ListItem>
              <ListItem >Count: {item.count}</ListItem>
            </List>
          )
         })
         
         setReadyTable(listOfTags)
       }

  return (
    <List  sx={{ display:'flex', flexDirection: 'column', minHeight: '85vh'}}>
    {readyTable? readyTable : <CircularProgress />}
    </List>
  )
}

export default ListOfItems