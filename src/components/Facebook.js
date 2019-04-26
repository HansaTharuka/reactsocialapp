import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Button from '@material-ui/core/Button';
import LinearQuery from './LinearQuery';
export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {
        // console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
        localStorage.setItem('logindata', JSON.stringify(this.state));
    };


    componentClicked = () => console.log("clicked");
    logoutcomponentClicked = () => {
        console.log("logout");
        this.setState({
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        });
        localStorage.removeItem('logindata');
        localStorage.clear();
    };

    // getlocaldata = () => {
    //     var getObject = JSON.parse(localStorage.getItem('logindata'));
    //     var bbc = localStorage.getItem('logindata');
    //     console.log(getObject);
    // }

    render() {
        let fbContent;
        const stylesObj = {
            background: "ROSYBROWN"
        };

        if (this.state.isLoggedIn) {
            fbContent = (
                <div
                    style={stylesObj} className="container"
                >
                <LinearQuery 
                    style={{ position: 'absolute',
                    bottom:0}}
                    />
                    <div
                        style={{
                            width: "auto",
                            margin: "auto",
                            paddingTop: "50px",
                            background: "#f4f4f4",
                            padding: "20px"
                        }}
                    >
                        <img src={this.state.picture} alt={this.state.name} style={{
                            width: '60px',
                            height: '60px'
                        }} />
                        <h2>Welcome {this.state.name}</h2>
                        Email: {this.state.email}
                        <br /><br />
                        <Button variant="contained" color="primary" onClick={this.logoutcomponentClicked}>
                            LogOut</Button>
                            
                        {/* <Button variant="primary" onClick={this.logoutcomponentClicked}>Log Out</Button> */}
                        {/* <Button variant="danger" onClick={this.getlocaldata}>Get data</Button> */}
                    </div>
                </div>
            );
        } else {
            fbContent = (
                <div
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <FacebookLogin
                        appId="2164446430335670"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                    />
                    <br />
                    {/* <Button variant="danger" onClick={this.getlocaldata}>Get data</Button> */}
                </div>
            );
        }

        return <div>{fbContent}</div>;
    }
}