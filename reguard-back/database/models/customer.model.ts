import { DataTypes, Model, Optional } from 'sequelize';
import { database as db } from '../database';

export interface CustomerAttributes {
    id: string, //uuid
    firstName: string,
    lastName: string,
    createdAt?: Date,
    updatedAt?: Date,
}

export const Customer = db.define("customer", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true //invokes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking destroy
})