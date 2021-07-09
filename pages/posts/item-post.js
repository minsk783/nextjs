import Link from 'next/link'
import styles from '../../styles/Item.module.css'

export default function ItemPost() {
    return (
        <div className={styles.app}>
        <header className={styles.header}>
          <h4>JustContent</h4>
        </header>
        
        <div className={styles.main}>
          <div className={styles.sidenav}>
            <div className={styles.filter}>
              <Link href="/">
                All Items
              </Link>
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
                <h3>Lorem Ipsum</h3>
              </div>
            </div>
            
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.info}>
                  <img src="https://via.placeholder.com/336x336" alt=""></img>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
              </div>
              
              <div className={styles.contentContainer}>
                <button>Upload</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}