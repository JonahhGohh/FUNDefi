import React, { useEffect, useState } from 'react';
import { Container, Card, CardGroup, ButtonGroup, ProgressBar} from 'react-bootstrap';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import nft from './images/RainforestNFT_1.jpg'
import { Icon, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


export const View = () => {


    useEffect(() => {

    }, [])

    return (
        <div >
            <header className="App-header">
            <h1 style={{marginTop: '60px', color: 'white' }}>NFT</h1>
                <Stack direction="row" spacing={10} style={{marginLeft: '80px', marginRight: '80px'}}>
                    <img src={nft}></img>
                    <div>
                        <Stack spacing={2}>
                            <Button variant="outlined" startIcon={<DownloadIcon/>}>Download</Button>
                            <Button variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
                            <Button variant="outlined" startIcon={<ContentCopyIcon/>}>Make a copy</Button>
                            <p>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LockIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="This image is public"/>
                                    </ListItem>
                                </List>
                            </p>
                            <label style={{textAlign: "left",}}>Share</label>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined"> <FacebookIcon/></Button>
                                <Button variant="outlined"> <TwitterIcon/></Button>
                                <Button variant="outlined"> <InstagramIcon/></Button>
                                <Button variant="outlined" startIcon={<LinkIcon/>}>Copy link</Button>
                            </Stack>
                            <Button variant="outlined" startIcon={<CodeIcon/>}>Embed</Button>
                            <Button variant="outlined" startIcon={<ArrowForwardIcon/>}>Start another project</Button>
                        </Stack>
                    </div>
                </Stack>
            </header>
        </div >
    )
}

export default View;    