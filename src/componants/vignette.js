import React from 'react';
var count = 0;


class Vignette extends React.Component {
    constructor(){
        super()
        this.state = {nb : 0}
        this.styleImg = {
            "backgroundImage": "url(https://www.softfluent.fr/wp-content/uploads/2019/10/javascript.png)",
            "backgroundSize": "contain",
            "backgroundPosition": "center",
            "width": "100%",
            "paddingLeft": "30px"
        }
        this.generalDiv = {
            "border":"solid #C4C4C4",
            "transition": "1s",
            "borderRadius": "5px",
            "height": "700px",
            "width": "315px",
            "marginLeft": "35px",
            "marginTop": "20px",
            "padding":"0px",
        }
        this.title = {
            "marginLeft": "20px",
            "marginTop": "30px",
            "fontFamily": "Heebo",
            "fontWidth":"700",
            "color":"#212529",
            "fontSize": "30px"
        }
        this.text = {
            "marginLeft": "20px",
            "marginTop": "30px",
            "fontFamily": "Heebo",
            "fontWidth":"400",
            "color":"#212529",
            "fontSize": "17px",
            "width": "90%",
            "background": "-webkit-linear-gradient(black, white)",
            "webkitBackgroundClip": "text",
            "webkitTextFillColor": "transparent"
        }
        this.button = {
            "backgroundColor": "#1abc9c",
            "color": "white",
            "borderRadius": "10px",
            "padding": "10px",
            "paddingLeft": "80px",
            "paddingRight": "80px",
            "marginLeft": "25px",
            "marginTop": "-20px"
        }
        this.a = {
            "color": "white",
            "borderRadius": "10px",
        }
    }

    handleClick = () => {
        console.log(this.props);
    }

    render() {
        var styleImg = {
            "backgroundImage": "url("+this.props.logo+")",
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "height": "200px",
            "width": "5000",
        }
        return (
            <div style = {this.generalDiv} onClick={console.log(this.props)}>
                <div style = {styleImg}>
                </div>
                <h1 class="title">{this.props.title}</h1>
                <p style={this.text}>{this.props.text}</p>
                <a href={this.props.link}><button style={this.button} type="button" class="btn"> En savoir plus </button></a>
            </div>
        );
    }
}

export default Vignette;
