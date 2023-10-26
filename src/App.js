import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './components/Coin';
import Navbar from './components/Navbar';

function App() {


  const[coins,setCoins] = useState([])


  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en "
  useEffect(() => {
    axios
    .get(url)
  .then(res => {
   setCoins(res.data)
  }).catch(error => console.log(error))
},  []);
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Coins coin={coins} key ={coins.id}/>}/>
      <Route path='/coin' element={<Coin/>}>
        <Route path=':coinId'/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
