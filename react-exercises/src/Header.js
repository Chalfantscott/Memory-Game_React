import React, { Component } from 'react';

class Header extends Component {
    render(props) {
        return <h1>{this.props.h1Text}</h1>
    }
}

export default Header;