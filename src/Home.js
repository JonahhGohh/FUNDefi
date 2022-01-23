import logo from './logo.svg';
import './App.css';
import { Button, Card, CardGroup, ButtonGroup, ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h1 style={{marginTop: '60px', color: 'white' }}>Welcome to FUNDefi</h1>

        <h2 style={{marginTop: '35px', marginBottom: '35px', width: '900px', color: 'cyan' }}>Fundefi is a fundraising platform where you can list NFT projects for crowdfunding and donate to other projects!</h2>
        <ButtonGroup aria-label="Get started">
          <Button className="mx-3 py-3 mb-3 px-3" variant="warning" size="lg" a href="./Discover">DISCOVER FUNDRAISERS</Button>
          <Button className="mx-3 py-3 mb-3 px-3" variant="primary" size="lg" a href="./createFundraiser">CREATE FUNDRAISERS</Button>
        </ButtonGroup>
        {/* <ProgressBar style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</ProgressBar> */}
        {/* <ProgressBar now="25" label={`$25% completed`} /> */}
        
        <h2 style={{marginTop: '35px', marginBottom: '20px', width: '900px', color: 'cyan' }}>You can make a difference now!</h2>
        <CardGroup>
        <Card className="mb-3 my-3 mx-3 py-3 px-3" style={{color: "#000"}}>
        <Card.Header>SAVE THE FORESTS</Card.Header>
          {/* <Card.Img src="https://picsum.photos/200/100"/> */}
          <Card.Img className='photo' src={require('./images/forest.jpg')}/>
          <Card.Body>
            <Card.Title>
              0.5 ETH
            </Card.Title>
            
            <Card.Text className="border d-flex align-items-center justify-content-center">
            This project seeks to raise awareness for the deforestation and protect forests.
            </Card.Text>
            <Button className="mx-1 py-3 px-3" variant="dark" size="lg">Find out more</Button>
            <Button className="mx-1 py-3 px-3" variant="primary" size="lg">Donate now</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Started 2 days ago</Card.Footer>
        </Card>
        
        <Card className="my-3 mx-3 py-3 px-3" style={{color: "#000"}}>
        <Card.Header>FUND TO BUILD SCHOOL</Card.Header>
          <Card.Img className='photo' src={require('./images/school.jpg')}/>
          <Card.Body>
            <Card.Title>
              0.5 ETH
            </Card.Title>
            <Card.Text className="border d-flex align-items-center justify-content-center">
            This project aims to raise USD$200,000 to build schools in rural Ethiopia so that education is accesible for more children.
            </Card.Text>
            <Button className="mx-1 py-3 px-3" variant="dark" size="lg">Find out more</Button>
            <Button className="mx-1 py-3 px-3" variant="primary" size="lg">Donate now</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Started 2 days ago</Card.Footer>
        </Card>

        <Card className="my-3 mx-3 py-3 px-3" style={{color: "#000"}}>
        <Card.Header>RIVER CLEANING</Card.Header>
          <Card.Img className='photo' src="{require('./images/school.jpg')}"/>
          <Card.Body>
            <Card.Title>
              0.5 ETH
            </Card.Title>
            <Card.Text className="border d-flex align-items-center justify-content-center">
            This project seeks to raise awareness for the deforestation and the earth is at risk of global warming.
            </Card.Text>
            <Button className="mx-1 py-3 px-3" variant="dark" size="lg">Find out more</Button>
            <Button className="mx-1 py-3 px-3" variant="primary" size="lg">Donate now</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Started 2 days ago</Card.Footer>
        </Card>
        </CardGroup>       
      </header>
    </div>
  );
}

export default Home;
