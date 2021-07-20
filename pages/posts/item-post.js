import Link from 'next/link'
import styles from '../../styles/Item.module.css'
import React, { useState, useEffect } from 'react'

const BUCKET_URL = "https://hello-aws-s3.s3.ap-southeast-1.amazonaws.com";

export default function ItemPost() {
  const [showMe, setShowMe] = useState(false);
  const [uploadedFileUrl, setFileUrl] = useState();

  function toggle() {
    setShowMe(!showMe);
  }

  async function handleUpload(e) {
    const file = e.target.files[0];
    const response = await fetch("/api/s3", {
      method: "POST",
      body: JSON.stringify({
        type: file.type,
        name: file.name
      })
    })

    const { url } = await response.json();
    console.log(url)
    await fetch(url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-type": file.type
      }
    })
    setFileUrl('${BUCKET_URL}/${file.name}')
  }

  return (
    <>
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
                
                <form id="imageForm">
                  <input type="file" onChange={handleUpload}/>
                  {/* <button type="submit" >Upload</button> */}
                </form>
                {/* <button>Upload</button> */}
                {/* <button onClick={toggle}>Content</button>
                <div style={{
                  display: showMe?"block":"none"
                }}>
                  <div className="list">
                    <ul>
                      No content
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}