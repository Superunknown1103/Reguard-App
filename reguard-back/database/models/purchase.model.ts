import { DataTypes, Model, Optional } from 'sequelize';
import { database as db } from '../database';

interface PurchaseAttributes {
    id: string, //uuid
    invoice: string,
    totalSaleAmount: number,
    invoiceDate: Date,
    deliveryDate: Date,
    name: string,
    description: string,
    sku: string,
    protectionPlanName: string,
    protectionPlanDuration: number,
    protectionPlanPrice: number,
    protectionPlanPeriod: string, 
    customerId: string, //uuid,
    createdAt?: Date,
    updatedAt?: Date,
}

export interface PurchaseInput extends Optional<PurchaseAttributes, 'id'> { }
export interface PurchaseOutput extends Required<PurchaseAttributes> { }

class Purchase extends Model<PurchaseAttributes, PurchaseInput> implements PurchaseAttributes {
    public id!: string
    public invoice!: string
    public totalSaleAmount!: number
    public invoiceDate: Date
    public deliveryDate: Date
    public name: string
    public description: string
    public sku: string
    public protectionPlanName: string
    public protectionPlanDuration: number
    public protectionPlanPrice: number
    public protectionPlanPeriod: string
    public customerId: string //uuid,

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Purchase.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    invoice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSaleAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    invoiceDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deliveryDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protectionPlanName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protectionPlanDuration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    protectionPlanPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    protectionPlanPeriod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true,
    sequelize: db,
    paranoid: true //invokes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking destroy
})