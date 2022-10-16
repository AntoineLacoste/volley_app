import { DataTypes } from "sequelize";
import { Model, Column, Table, CreatedAt, UpdatedAt, PrimaryKey, DataType, AutoIncrement } from "sequelize-typescript";

@Table
export class Team extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_team!: number;

    @Column(DataType.STRING)
    name!: string;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt?: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt?: Date;
}