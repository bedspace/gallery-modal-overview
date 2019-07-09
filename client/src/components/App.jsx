import React, {Component} from 'react';

const AppStyle = {
    width: '100%',
    height: '500px',
    'background-color': 'blue',
    position: 'relative'
}

const housePicture = {
    width: '50%',
    height: '50%'
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch('http://localhost:1128/testing')
        .then(function(response) {
          console.log('BEFORE RESPONSE GETS JSOND');
          return response.json();
        })
        .then(function(myJson) {
          console.log('WE GOT SOME DATA BACK');
          console.log(Array.isArray(myJson));
        })
    }

    render() {
        return (
            <div style={AppStyle}>
                <div >
                    <img style={housePicture} src={'https://bit.ly/2Xun9Bc'}/>
                </div>
                hello worldoh!
            </div>
        )
    }
}


export default App;