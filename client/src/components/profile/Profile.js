import React, { Component } from 'react';

class Profile extends Component {
    render() {
        if (this.props.userName === undefined || this.props.skills === undefined){
            return null
        }
        return (
            <div>
                <div>
                    {this.props.userName}
                </div>

                <div>

                </div>
            </div>
        );
    }
}

export default Profile;