import { DataTypes, Model, Optional } from 'sequelize';
import { database as db } from '../database';

interface CustomerAttributes {
    id: string, //uuid
    firstName: string,
    lastName: string,
    createdAt?: Date,
    updatedAt?: Date,
}

export interface CustomerInput extends Optional<CustomerAttributes, 'id'> { }
export interface CustomerOutput extends Required<CustomerAttributes> { }

class Customer extends Model<CustomerAttributes, CustomerInput> implements CustomerAttributes {
    public id!: string
    public firstName!: string
    public lastName!: string

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Customer.init({
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
    sequelize: db,
    paranoid: true //invokes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking destroy
})