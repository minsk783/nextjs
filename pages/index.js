import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h4>JustContent</h4>
      </header>

      <div className={styles.main}>
        <div className={styles.sidenav}>
          <div className={styles.filter}>
            <a href="#all-items">All Items</a>
            <a href="#category-1">Category I</a>
            <a href="#category-2">Category II</a>
            <a href="#category-3">Category III</a>
            <a href="#category-4">Category IV</a>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.path}>
            <div className={styles.route}>
              <p>Path</p>
            </div>
            
            <div className={styles.destination}>
              <h3>All Item</h3>
            </div>
          </div>
          
          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
              <div className={styles.box}>
                <img src="https://via.placeholder.com/188x188" alt=""></img>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
