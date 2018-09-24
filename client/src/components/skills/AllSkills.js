import React, { Component } from 'react';
import axios from 'axios'
import Skills from '../profile/Skills';

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
       globalSkills = response.data.sort()
       globalSkills = globalSkills.sort(function(a,b){
           return a.name >b.name
       })
       console.log(globalSkills)
       this.setState({globalSkills})
    }

    render() {
        return (
            <div>

                <div>
                    {
                        this.props.userSkills.map((skill, i)=>{
                            return <Skills skill={skill} key={i}/>
                        })
                    }
                </div>

                <div>
                    {
                        this.state.globalSkills.map((skill, i)=>{
                            return <Skills globalSkillsTrue={true} skill={skill} key={i}/>
                        })
                    }
                </div>
                
            </div>
        );
    }
}

export default AllSkills;