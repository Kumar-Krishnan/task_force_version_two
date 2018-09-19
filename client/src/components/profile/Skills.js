import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                {this.props.skill.name}
            </div>
        );
    }
}

export default Skills;