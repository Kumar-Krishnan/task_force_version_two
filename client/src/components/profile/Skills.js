import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import axios from 'axios'

class Skills extends Component {

    addSkillToUser = async() =>{
        let response = await axios.post(`/skills/${this.props.skill.id}/add_skill_to_user`)
        console.log(response)
    }
    render() {
        return (
            <div>
                {this.props.skill.name}
                {
                    this.props.globalSkillsTrue ?
                    <Icon onClick={this.addSkillToUser} name="add" size="small"/>
                    : null
                }
            </div>
        );
    }
}

export default Skills;