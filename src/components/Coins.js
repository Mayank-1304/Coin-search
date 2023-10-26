import React from 'react'
import CoinsItems from './CoinsItems'
import Coin from './Coin'
import {Link} from 'react-router-dom'


const Coins = (props) => {
  return (
    <div className="container">
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coins</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Voloume</p>
                <p className='hide-mobile '>Mkt Cap</p>
            </div>
        </div>
    <div>
      {props.coin.map((post)=>{
        return(
          <>
          <Link to={`/coin/${post.id}`} element={<Coin/>} key={post.id} >
          <CoinsItems coins ={post}/>
          </Link>
          </>
          )
        })}
   </div>
    </div>
  )
}

export default Coins
    
