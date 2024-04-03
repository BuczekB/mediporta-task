import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Data/DataContext'



import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

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
            <List  sx={{ display: 'flex', width: '30vw', justifyContent:'center'}} key={item.name}>
              <ListItem  sx={{ display:'flex', justifyContent:'center'}}>
                  <Typography variant="h6" gutterBottom>
                  Name: {item.name}
                  </Typography>
                </ListItem>
              <ListItem sx={{ display:'flex', justifyContent:'center'}}>
              <Typography  variant="h6" gutterBottom>
                  Count: {item.count}
                  </Typography></ListItem>
            </List>
          )
         })
         
         setReadyTable(listOfTags)
       }

  return (
    <List  sx={{ display:'flex', flexDirection: 'column', minHeight: '85vh', justifyContent:'center'}}>
    {readyTable? readyTable : <CircularProgress />}
    </List>
  )
}

export default ListOfItems