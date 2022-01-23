import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'jquery/dist/jquery.min.js';


export const MyFundraisers = () => {


    const stats = [{
        name: 'Save the forests',
        description: 'This project seeks to raise awareness for the deforestation and the earth is at risk of global warming.',
        clicks: 5,
        likes: 10,
        price: '0.0001 eth'
    },
    {
        name: 'Help these children',
        description: 'This project hopes to raise awareness for children in Kenya and the proceeds will help provide them with meals.',
        clicks: 21,
        likes: 3,
        price: '0.0023 eth'
    }]

    const [showModal, setShowModal] = useState(false);
    const [currStat, setCurrStat] = useState(null);

    const changeModalState = (name, clicks, likes, price) => {
        if (!showModal) {
            setCurrStat([name, clicks, likes, price])
            setShowModal(true)
        }
    }


    useEffect(() => {

    }, [])

    return (
        <div style={{ backgroundColor: '#000080', height:'1200px' }}>
            <div>
                <h1 style={{ marginTop: '35px', color: 'white' }}>My Fundraiser</h1>
            </div>
            <div >
                <ol className="list-group list-group-numbered" style={{ padding: '10px', textAlign: 'left', color: 'rgb(188, 206, 218)' }}>
                    {stats && stats.map((stat, index) => {
                        return (
                            <div className="card" key={index}>
                                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                                <div className="card-body">
                                    <h4 className="card-title" style={{ color: 'black' }}>{stat.name}</h4>
                                    <p className="card-text" style={{ color: 'black' }}>{stat.description}</p>
                                    <button type="button" className="btn btn-primary" onClick={() => changeModalState(stat.name, stat.clicks, stat.likes, stat.price)}>View Statistics</button>

                                </div>
                                <div style={{ height: '20px' }}></div>
                            </div>
                        )
                    })}
                </ol>
            </div>
            {showModal && <div className="moda" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ textAlign:'center'}}>
                            <h5 className="modal-title" style={{ textAlign:'center'}}>{currStat[0]}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Clicks: {currStat[1]}</p>
                            <p>Likes: {currStat[2]}</p>
                            <p>Price: {currStat[3]}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div >
    )
}

export default MyFundraisers;