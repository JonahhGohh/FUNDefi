import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './App.css';

export const CreateFundraiser = () => {
    const initialFormData = Object.freeze({
        fundCategory: "",
        fundDesc: "",
        fundGoal: "",
        currency: "",
        fundTitle: "",
        fundSummary: "",
    })

    const [formData, updateFormData] = React.useState(initialFormData);
    const [image, setImage] = React.useState([])

    const handleSubmit = event => {
        event.preventDefault();
        // Submit 
    }

    const handleChange = event => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const onImageChange = event => {
        setImage([...event.target.files]);
    }

    return (
        <div className="App" style={{backgroundColor:'#282c34'}}>
            <br></br>
            <h1 style={{ marginTop: '35px', color: 'White' }}>Create Fundraiser</h1>
            <br></br>
            <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <Form.Group className="mb-3" style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Form.Label style={{color:'#ffc107', fontWeight: 'bold', fontSize: '24px' }}>Fundraiser Title</Form.Label>
                    <br></br><br></br>
                    <Form.Control type="title" placeholder="Enter title" name='fundTitle' onChange={handleChange} style={{ width: '600px', justifyContent: 'center', marginLeft: '650px', borderRadius:'20px', height:'50px' }} />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Form.Label style={{color:'#ffc107', fontWeight: 'bold', fontSize: '24px' }}>Fundraiser Brief Summary</Form.Label>
                    <br></br><br></br>
                    <Form.Control type="summary" placeholder="Enter summary" name='fundSummary' onChange={handleChange} style={{ width: '600px', height:'100px', justifyContent: 'center', marginLeft: '650px', borderRadius:'20px' }} />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Form.Label style={{color:'#ffc107', fontWeight: 'bold', fontSize: '24px' }}>Fundraiser Description</Form.Label>
                    <br></br><br></br>
                    <Form.Control type="email" placeholder="Enter Description" name='fundDesc' onChange={handleChange} style={{ width: '600px', height:'300px', justifyContent: 'center', textAlign:'left', marginLeft: '650px', borderRadius:'20px' }} />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label style={{color:'#ffc107', fontWeight: 'bold', fontSize: '24px' }}>Fundraising Goal:</Form.Label>
                    <br></br><br></br>
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <Form.Control type="email" placeholder="Enter Fundraising goal" name='fundCategory' onChange={handleChange} style={{ width: '300px', justifyContent: 'center', marginLeft: '750px', borderRadius:'20px' }} />
                        <div style={{width:'20px'}}></div>
                        <select value="currency" onChange={handleChange} style={{borderRadius:'10px'}}>
                            <option value="btc">btc</option>
                            <option value="eth">eth</option>
                            <option value="bnb">bnb</option>
                            <option value="usd">usd</option>
                        </select>
                    </div>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label style={{color:'#ffc107', fontWeight: 'bold', fontSize: '24px' }}>Fund Category</Form.Label>
                    <br></br><br></br>
                    <select value="fundCategory" onChange={handleChange} style={{height:'40px', borderRadius:'10px'}}>
                        <option value="Accidents">Accidents & Emergencies</option>
                        <option value="Pets">Animals & Pets</option>
                        <option value="Family">Babies, Kids and Family</option>
                        <option value="Business">Business & Entrepeneurship</option>
                        <option value="Celebration">Celebrations & Events</option>
                        <option value="Community">Community & Neighbours</option>
                        <option value="Competitions">Competitions and Pageants</option>
                        <option value="Art">Creative Arts, Music & Film</option>
                        <option value="Personal">Dreams, Hopes & Wishes</option>
                        <option value="Education">Education & Learning</option>
                        <option value="Memorial">Funerals & Memorials</option>
                        <option value="Medical">Medical, Illness & Healing</option>
                        <option value="Religion">Missions, Faith & Church</option>
                        <option value="Sport">Sports, Teams & Clubs</option>
                        <option value="Travel">Travel & Adventure</option>
                        <option value="Volunteer">Volunteer & Service</option>
                        <option value="Wedding">Wedding & Honeymoon</option>
                        <option value="Other">Other</option>
                    </select>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label style={{color:'#ffc107', fontWeight: 'bold', fontSize: '24px' }}>Upload a picture</Form.Label>
                    <br></br><br></br>
                    <input type="file" onChange={onImageChange} style={{marginLeft:'130px', height:'40px', color:'white', borderRadius:'10px'}}>
                    </input>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div style={{height:'60px'}}></div>
        </div >
    )
}

export default CreateFundraiser;