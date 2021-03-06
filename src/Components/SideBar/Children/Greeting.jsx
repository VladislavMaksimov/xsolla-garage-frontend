import React from 'react'
import styles from './GreetingStyles.module.css'
import planner from '../../../Assets/Pictures/Planner.png'

const Greeting = props => {
  return (
    <div className={styles.greeting}>
      <div className={styles.ImageContainer}>
        <img src={planner} className={styles.grImage}/>
      </div>
      <p className={styles.helloUser}>Привет, {props.userProfile.given_name}!</p>
      <p className={styles.currentTasks}>Количество текущих задач:&nbsp;<b>{props.tasksCount}</b></p>
    </div>
  )
}
export default Greeting
