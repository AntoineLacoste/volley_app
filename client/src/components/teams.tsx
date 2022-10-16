import React from 'react';
import { useEffect, useState } from 'react';
import { Team } from '../types/teamTypes';
import volleyball from '../volleyball.png';
import TeamUI from './team';

function Teams() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/getAllTeam")
            .then((response) => response.json())
            .then((data) => setTeams(data.teams))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src={volleyball} className="App-logo" alt="volleyball" />
                {
                    teams.map((team: Team) => <TeamUI key={team.id_team} team={team} />)
                }
            </header>
        </div>
    );
}

export default Teams;