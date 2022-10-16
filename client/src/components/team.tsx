import React from 'react';
import { TeamProps } from '../types/teamTypes';

function TeamUI({ team }: TeamProps) {
    return (
        <div>
            <p>{team.id_team} {team.name}</p>
            <button>{team.id_team} {team.name}</button>
        </div>
    );
}

export default TeamUI;