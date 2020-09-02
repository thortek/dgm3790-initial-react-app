import React from 'react'
import repsData from './data/house.json'
import './Senators.css'

const reps = repsData.results[0].members

const mostGutlessRep = reps.reduce((acc, rep) => {
    const partyName = acc.party === "D" ? 'Democrat' : 'Republican'
    return acc.votes_with_party_pct > rep.votes_with_party_pct ? { ...acc, partyName } : { ...rep, partyName }
})

const mostMissedVotes = reps.reduce((acc, rep) => {
    return acc.missed_votes_pct > rep.missed_votes_pct ? acc : rep
})

function Representative() {
    return (
        <div className="column">
            <h1>Representatives!</h1>
            <h3>Most Gutless Representative: {mostGutlessRep.first_name} {mostGutlessRep.last_name} votes with the {mostGutlessRep.partyName} party {mostGutlessRep.votes_with_party_pct}% of the time!</h3>
            <h3>Most Missed Votes:  Can you believe <span className="emphasis">{mostMissedVotes.first_name} {mostMissedVotes.last_name}</span> missed votes {mostMissedVotes.missed_votes_pct}% of the time!</h3>
           {
                reps.map(rep => {
                    return (<p key={rep.id + rep.total_votes}>
                        {rep.first_name} {rep.middle_name} {rep.last_name}
                    </p>
                    )
                })
            }
        </div>
    )
}

export default Representative