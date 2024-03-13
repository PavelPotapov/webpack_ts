import classes from './App.module.scss'
import './Test.scss'

export const App = () => {
  return (
    <div>
      <button className="test">Test</button>
      <button className={classes.button}>hello world</button>
      <button className={classes.value}>Some btn</button>
    </div>
  )
}
