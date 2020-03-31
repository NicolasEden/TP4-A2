import React from 'react';


class ButtonB extends React.Component {
    render() {
        var buttons = {
            "textAlign": "center",
            "marginLeft": "-60px",
            "marginBottom": "25px",
            "marginTop": "25px",
        }
        return (
            <div style={buttons}>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-light">«</button>
                    <button type="button" class="btn btn-light">1</button>
                    <button type="button" class="btn btn-light">2</button>
                    <button type="button" class="btn btn-light">3</button>
                    <button type="button" class="btn btn-light">»</button>
                </div>
            </div>
        );
    }
}

export default ButtonB;
