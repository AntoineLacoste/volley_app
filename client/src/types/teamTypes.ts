export interface Team {
    id_team: string
    name: string
    updatedAt: Date
    createdAt: Date
}

export interface TeamProps {
    team: Team
}