import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/profile.scss';

export default class Profile extends Component{
    render(){
        return(
            <div className="Profile">
                <div className="cover">
                    <div className="logo">
                        <Link to="/profile"><img src="/foodLogo.png" alt="FoodLogo"/></Link>
                    </div>
                </div>
                <div className="body">
                    <div className="profile">
                        <img src="/pro.jpg" alt="Profile"/>
                        <h2> {this.props.data == "" ? "---------" : this.props.data.user.name} </h2>
                        <p className="tag">{this.props.data == "" ? "--------------------" : this.props.data.user.about}</p>
                        <p>{this.props.data == "" ? "-------------------------" : this.props.data.user.address}</p>
                        <p>Contact: {this.props.data == "" ? "0000000000" : this.props.data.user.phone}</p>
                        <div className="orders">
                        <p>{this.props.data == "" ? "0" : this.props.data.items.length}</p>
                            <Link to="/orders">Orders</Link>
                        </div>
                    </div>
                    <div className="likesndislikes">
                        <div className="likes">
                            <p>Likes</p>
                            {this.props.data == "" ? 
                                (<ul>
                                    <li>--------</li>
                                </ul>) : (
                                <ul>
                                    <li>Chicken</li>
                                    <li>Beer</li>
                                    <li>Spicy</li>
                                </ul>
                                )
                            }
                        </div>
                        <div className="dislikes">
                            <p>Dislikes</p>
                            {this.props.data == "" ? 
                                (<ul>
                                    <li>--------</li>
                                </ul>) : (
                                <ul>
                                    <li>Fish</li>
                                    <li>Rum</li>
                                    <li>Oriental</li>
                                </ul>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}