import React, {Component} from 'react';
import axios from 'axios'
import {Container} from 'react-bootstrap';

const apiUrl = process.env.API_URL || `http://localhost:1337`;


class Professionals extends Component {
    constructor(props) {
        super(props);

        this.state = {
            propage: []
        }
    }


    async componentDidMount() {
        try {
            const res = await axios.get(apiUrl + '/propages').then(res => {
                console.log(res.data)
                this.setState({propage: res.data})
            });
        } catch (err) {
            console.error(err)
        }
    }


    render() {

        return (
            <div>
                <div className="offset professional-section">
                    <Container> {
                        this.state.propage.map((pro, index) => <div key={index}>
                            <div key={
                                index + 1
                            }>
                                <h1>{
                                    pro.becomeHeader
                                }</h1>
                                <p>{
                                    pro.becomeDesc
                                }</p>
                                <a href="/application" className="landingButton">Application</a>
                                <a href="/payment" className="landingButton ge">Payment</a>
                            </div>
                            
                            <div key={
                                index + 2
                            }>
                                <h1 className="professionalHeader">
                                    {
                                    pro.officeHeader
                                }</h1>
                                <p>{
                                    pro.officeDesc
                                }</p>
                            </div>
                        </div>)
                    }
                        <img className="professionalsImage" src="/images/memberimg3.jpg" alt=""/>

                    </Container>
                </div>
            </div>
        );
    }
}

export default Professionals;
