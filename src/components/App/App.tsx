import React from 'react'
import classes from './App.module.scss'
import './Test.scss'
import { Link, Outlet } from 'react-router-dom'

export const App = () => {
  const [count, setCount] = React.useState(0)
  const handleClick = (): void => {
    setCount(count + 1)
  }

  return (
    <div>
      <Link to={'/about'}>About</Link>
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
