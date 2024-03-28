import axios from 'axios'


const FetchData = ({page = 1}) =>{
    axios({
        method: 'get',
        url: 'https://api.stackexchange.com/2.3/tags?order=desc&max=999&sort=popular&site=stackoverflow',
        params: {page: page}
    })
      .then(res => console.log(res.data))
      .catch(err => console.error(err))

      

  return (
    <div>FetchData</div>
  )
}

export default FetchData