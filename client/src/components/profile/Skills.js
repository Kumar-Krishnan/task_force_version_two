import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import axios from 'axios'

class Skills extends Component {

    addSkillToUser = async() =>{
        let response = await axios.post(`/skills/${this.props.skill.id}/add_skill_to_user`)
        console.log(response)
    }

    removeSkillFromUser = async() =>{
        let response = await axios.delete(`/skills/${this.props.skill.id}/remove_skill_from_user`)
        console.log(response)
    }
    render() {
        return (
            <div>
                {this.props.skill.name}
                {
                    this.props.globalSkillsTrue ?
                    <Icon onClick={this.addSkillToUser} name="add square" size="small"/>
                    : null
                }
                {
                    this.props.subtractionPossible ?
                    <Icon onClick={this.removeSkillFromUser} name="minus square" size="small"/>
                    :null
                }
            </div>
        );
    }
}

export default Skills;