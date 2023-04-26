import { DataTypes, Model, Optional } from 'sequelize';
import { database as db } from '../database';

export interface ClaimAttributes {
    id: string, //uuid
    status: string,
    solution: string,
    createdAt?: Date,
    updatedAt?: Date,
    customerId: string, //uuid
    productPurchaseId: string,
    productCondition: string,
    damageDescription: string,
    damageDate: string
}


export const Claim = db.define('claim', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    solution: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productPurchaseId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productCondition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    damageDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    damageDate: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    paranoid: true //invokes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking destroy
});