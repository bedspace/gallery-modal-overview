import React, {Component} from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch('http://localhost:1128/testing')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log('WE GOT SOME DATA BACK');
          console.log(JSON.stringify(myJson));
        })
    }

    render() {
        return (
            <div>hello worldoh!</div>
        )
    }
}


export default App;