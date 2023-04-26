import express, { Request, Response } from 'express';
import { Customer } from '../database/models/customer.model';
import { database } from '../database/database';

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).send('An error occurred while fetching customers');
    }
};

export const getCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            return res.status(404).send(`Customer with ID ${id} not found`);
        }
        res.json(customer);
    } catch (err) {
        console.error(`Error fetching customer with ID ${id}:`, err);
        res.status(500).send(`An error occurred while fetching customer with ID ${id}`);
    }
};

export const getCustomerCount = async (req: Request, res: Response) => {
    try {
        const count = await Customer.count();
        res.json({ count });
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).send('An error occurred while fetching customers');
    }
};