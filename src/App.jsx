import { useState } from 'react'

import FetchData from './Data/FetchData'
import { DataContext } from './Data/DataContext';


function App() {

  const [data, setData] = useState([])

  console.log(data, 'test');

  return (
    <DataContext.Provider value={data}>
        <FetchData
          setData={setData}
        />

    </DataContext.Provider>
  )
}

export default App