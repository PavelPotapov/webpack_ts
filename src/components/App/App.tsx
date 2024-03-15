import React from 'react'
import classes from './App.module.scss'
import './Test.scss'
import { Link, Outlet } from 'react-router-dom'
import AvatarPng from '@/assets/brawl.png'
import AvatarJpg from '@/assets/foxes.jpg'
import ZipIcon from '@/assets/zip-icon.svg'

export const App = () => {
  const [count, setCount] = React.useState(0)
  const handleClick = (): void => {
    setCount(count + 1)
  }

  return (
    <div>
      <div>
        <img src={AvatarPng} alt="" />
        <img src={AvatarJpg} alt="" width={350} height={250} />
        <ZipIcon width={50} height={50} color="red" />
      </div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <button className="test" onClick={handleClick}>
        Test
      </button>
      <button className={classes.button}>{count}</button>
      <button className={classes.value}>Some btn</button>
      <Outlet />
    </div>
  )
}
