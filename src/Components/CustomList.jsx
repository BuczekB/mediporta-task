import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

const CustomList = ({handleInputChange, handleChange, handleSerch, numberOfItems, sort }) => {
  return (
    <Box sx={{ display: 'flex', paddingTop: '20px' }}>
        <TextField
       id="outlined-basic"
        label="Choose limit of items per page"
         variant="outlined"
          type='number'
          onChange={handleInputChange}
          value={numberOfItems} />
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'Name'}>Name</MenuItem>
          <MenuItem value={'Activity'}>Activity</MenuItem>
          <MenuItem value={'Popular'}>Popular</MenuItem>
        </Select>
        <Button variant="contained" onClick={handleSerch}>
          Serch
        </Button>
        </Box>
  )
}

export default CustomList