import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  const [time, setTime] = React.useState('')

  const formatTime = (val) => {
    if (val < 10) {
      return '0'
    } else {
      return ''
    }
  }

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)

    return function cleanup() {
      clearInterval(timerId)
    }
  })

  const tick = () => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()

    setTime(formatTime(h) + h + ':' + formatTime(m) + m + ':' + formatTime(s) + s)
  }

  return (
    <div className={styles.root}>
      <h1>{time}</h1>
    </div>
  )
}

export default Footer;