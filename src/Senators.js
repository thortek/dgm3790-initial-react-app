import React, { Component } from 'react'
import senateData from '../src/data/senate.json'
import './Senators.scss'
import styled from 'styled-components'
import { Button } from '@material-ui/core';

const StyledButton = styled.button`
    color: blue;
    border: 2px solid pink;
    padding: 8px;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.hover > 200 ? 'salmon' : 'lightgreen'};
        color: black;
    }
`

class Senators extends Component {

    state = {
        members: senateData.results[0].members,
        dems: senateData.results[0].members.filter(member => member.party === 'D'),
        repubs: senateData.results[0].members.filter(member => member.party === 'R'),
        indy: senateData.results[0].members.filter(member => member.party === 'ID')
    }

    senioritySortHandler = () => {
        const newMembers = [...this.state.members]
        const sortedMembers = newMembers.sort((a, b) => {
            return a.seniority - b.seniority
        })
        this.setState({
            members: sortedMembers
        })
    }
    
    render() {
        return (
            <div className="column">
                <h1>{this.state.members.length} Senators!</h1>
                <h2>Democrats: {this.state.dems.length}</h2>
                <h2>Republicans: {this.state.repubs.length}</h2>
                <h2>Independents: {this.state.indy.length}</h2>
                <StyledButton hover={this.state.members.length}>Styled Button!</StyledButton>
                <button onClick={this.senioritySortHandler}>Sort by Seniority</button>
                <Button variant="contained" color="primary">Material UI Button!</Button>
                {
                    this.state.members.map((member, index) => {
                        return (
                            <p className="senator" key={member.id + member.total_votes}>
                                {member.first_name} {member.middle_name} {member.last_name}
                           </p>
                       ) 
                    })
                }
            </div>
        )
    }
}

export default Senators