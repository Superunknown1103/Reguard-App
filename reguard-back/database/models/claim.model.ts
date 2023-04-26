import { DataTypes, Model, Optional } from 'sequelize';
import { database as db } from '../database';

interface ClaimAttributes {
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

export interface ClaimInput extends Optional<ClaimAttributes, 'id'> { }
export interface ClaimOutput extends Required<ClaimAttributes> { }

class Claim extends Model<ClaimAttributes, ClaimInput> implements ClaimAttributes {
    public id!: string
    public status!: string
    public solution!: string
    public customerId: string
    public productPurchaseId: string
    public productCondition: string
    public damageDescription: string
    public damageDate: string

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Claim.init({
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
    sequelize: db,
    paranoid: true //invokes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking destroy
})