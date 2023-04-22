import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="/">Takda</a>
    </header>
  )
}

export default Header