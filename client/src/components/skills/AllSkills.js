import React, { Component } from 'react';
import axios from 'axios'

class AllSkills extends Component {
    state = {
        globalSkills:[]
    }

    componentWillMount = async() =>{
        this.getGlobalSkills()
    }

    getGlobalSkills = async() =>{
       let globalSkills = []
       let response = await axios.get('/skills')
       globalSkills = response.data
       this.setState({globalSkills})
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default AllSkills;