import React, { Component } from 'react';
import Skills from './Skills';


class Profile extends Component {
    render() {
        if (this.props.userName === undefined || this.props.skills.length < 4){
            return null
        }

        // const skills = () => {
        //     for (let i =0; i < this.props.skills.length; i++){
        //         return (
        //             <Skills skill={this.props.skills[i]} key={i}/>
        //         )
        //     }
        // }
        
        return (
            <div>
                <div>
                    {this.props.userName}
                </div>

                <div>
                    {
                        this.props.skills.map((skill, i)=>{
                            return <Skills skill={skill} key={i}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Profile;