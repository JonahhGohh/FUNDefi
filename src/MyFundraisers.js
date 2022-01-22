import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


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

    useEffect(() => {

    }, [])

    return (
        <div>
            <div>
                <h1>My Fundraiser</h1>
            </div>
            <div >
                <ol className="list-group list-group-numbered" style={{ padding: '10px', textAlign: 'left', color: 'rgb(188, 206, 218)' }}>
                    {stats && stats.map(stat => {
                        return (
                            <div class="card" style="width: 18rem;">
                                {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                                <div class="card-body">
                                    <h5 class="card-title">{stat.name}</h5>
                                    <p class="card-text">{stat.description}</p>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">View Statistics</button>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </ol>
            </div>
        </div >
    )
}

export default MyFundraisers;