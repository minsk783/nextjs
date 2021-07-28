import Link from 'next/link'
import styles from '../../styles/Item.module.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faFile, faFolder, faTrash } from '@fortawesome/free-solid-svg-icons';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const BUCKET_URL = "https://hello-aws-s3.s3.ap-southeast-1.amazonaws.com";

export default function ItemPost() {
  const [showMe, setShowMe] = useState(false);
  const [uploadedFileUrl, setFileUrl] = useState();
  const [fileName, setFileName] = useState();
  const [showUrl, setShowUrl] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    const sUrl = BUCKET_URL + "/" + file.name
    setShowUrl(sUrl)
    setFileName(file.name)
  }

  const classes = useStyles();

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
                  <h2>Item Name</h2>
                  <p>Description</p>
                  <h3>Category: category</h3>
                </div>
              </div>
              
              <div className={styles.contentContainer}>
                <div className={styles.fileWrapper}>
                  <div className={styles.fileList}>
                    <List subheader={<ListSubheader>Files</ListSubheader>} className={styles.fileListHeader}>
                      <a href={showUrl}>
                        <ListItem className={styles.fileSlot}>
                          <ListItemAvatar>
                            <Avatar>
                              <FontAwesomeIcon icon={faFile} />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary="File Name"/>
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                              <FontAwesomeIcon icon={faTrash}/>
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </a>
                    </List>
                  </div>
                </div>
                
                <button className={styles.uploadBtn} onClick={handleClickOpen}><FontAwesomeIcon icon={faCloudUploadAlt} color="white" /></button>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Upload Files</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Select your files:
                      <input type="file" onChange={handleUpload}/>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                      Cancel
                    </Button>
                    <Button onClick="" color="primary">
                      Upload
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}