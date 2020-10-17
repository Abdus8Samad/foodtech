import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/orders.scss';

export default class Orders extends Component{
    state = {
        totalTax:0,
        totalPrice:0
    }
    componentDidUpdate = (prevProps) =>{
        if(this.props.data.order_id !== prevProps.data.order_id){
            this.props.data.items.forEach(item =>{
                this.setState(state =>({
                    totalTax:state.totalTax + (item.tax_pct * (item.price / 100)),
                    totalPrice:state.totalPrice + item.price
                }))
            })
        }
    }
    render(){
        return(
            <div className="Orders">
                <div className="cover">
                    <div className="logo">
                        <Link to="/profile"><img src="/foodLogo.png" alt="FoodLogo"/></Link>
                    </div>
                </div>
                <div className="body">
                    <h1>{this.props.data == "" ? "0 orders" : (
                            <div>
                                {this.props.data.items.length} orders 
                                <i class="orderid"> [ id : {this.props.data.order_id}]</i>
                            </div>
                        )
                    }
                    </h1>
                        {this.props.data == "" ? "" : (
                            <>
                    <div className="flex">
                        <div className="customer">
                            <table>
                                <tr>
                                    <th colspan="2">Customer</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{this.props.data.user.name}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{this.props.data.user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{this.props.data.user.address}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="restaurant">
                            <table>
                                <tr>
                                    <th colspan="2">Restaurant</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{this.props.data.restaurant.name}</td>
                                </tr>
                                <tr>
                                    <th>Street</th>
                                    <td>{this.props.data.restaurant.street}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{this.props.data.restaurant.city}</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>{this.props.data.restaurant.state}</td>
                                </tr>
                                <tr>
                                    <th>Zipcode</th>
                                    <td>{this.props.data.restaurant.zipcode}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                        <table class="items">
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Qty.</th>
                                <th>tax in %</th>
                                <th>Price</th>
                            </tr>
                            {this.props.data.items.map((item,index) =>(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.tax_pct}</td>
                                    <td>{item.price + " " + item.currency}</td>
                                </tr>
                            )
                            )}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{this.state.totalTax}</td>
                                <td>{this.state.totalPrice}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th>Total</th>
                                <th>{this.state.totalPrice + this.state.totalTax}</th>
                            </tr>
                        </table>
                        </>
                    )}
                </div>
            </div>
        )
    }
}