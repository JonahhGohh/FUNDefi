import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format';


export const CreateFundraiser = () => {
    const initialFormData = Object.freeze({
        firstName: "",
        lastName: "",
        address: "",
        fundCategory: "",
        fundGoal: "",
        currency: "",
        fundTitle: "",
        whyFund: "",
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
        <div>
            <h1 style={{ marginTop: '35px', color: 'Black'}}>Create Fundraiser</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>First Name</p>
                        <input 
                            name="firstName" 
                            onChange={handleChange}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Last Name</p>
                        <input 
                            name="lastName" 
                            onChange={handleChange}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Address</p>
                        <input 
                            name="address" 
                            onChange={handleChange}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Fundraising Category</p>
                        <select value="fundCategory" onChange={handleChange}>
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
                    </label>
                </fieldset>
                <fieldset>
                    <div>
                        <label>
                            <p>Fundraising Goal</p>
                                <NumberFormat
                                    decimalSeparator='.'/>
                            <select value="currency" onChange={handleChange}>
                                <option value="btc">btc</option>
                                <option value="eth">eth</option>
                                <option value="bnb">bnb</option>
                                <option value="usd">usd</option>
                            </select>
                        </label>
                    </div>    
                </fieldset>
                <fieldset>
                    <p><strong> Upload a cover photo or video </strong></p>
                    <p>A high quality photo or video will help tell your story and build trust with donors.</p>
                    <input type="file" onChange={onImageChange}>
                    </input>
                </fieldset>
                <fieldset>
                    <p><strong> Tell your story</strong></p>
                    <p>What's your fundraiser title?</p>
                    <input
                        name='fundTitle'
                        onChange={handleChange}/>
                    <p>Why are you fundraising?</p>
                    <input
                        name="whyFund"
                        onChange={handleChange}/>

                </fieldset>
                <button type="submit">Submit your fundraiser</button>
            </form>
        </div >
    )
}

export default CreateFundraiser;