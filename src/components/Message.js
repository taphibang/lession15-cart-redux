import React, { Component } from 'react';

class App extends Component {
    render() {
        var {message} = this.props;
        return (
            <h3>
                <span className="badge amber darken-2">
                    {message}
                </span>
            </h3>
        );
    }
}
export default App;
