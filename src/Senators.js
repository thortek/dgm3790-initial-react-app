import React, { Component } from 'react'
import senateData from '../src/data/senate.json'
import './Senators.css'

const members = senateData.results[0].members
const dems = members.filter(member => member.party === 'D')
const repubs = members.filter(member => member.party === 'R')
const indy = members.filter(member => member.party === 'ID')

class Senators extends Component {
    render() {
        return (
            <div className="column">
                <h1>{members.length} Senators!</h1>
                <h2>Democrats: {dems.length}</h2>
                <h2>Republicans: {repubs.length}</h2>
                <h2>Independents: {indy.length}</h2>
                {
                    members.map((member, index) => {
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