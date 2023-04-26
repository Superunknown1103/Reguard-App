import express, { Request, Response } from 'express';
import { Purchase } from '../database/models/purchase.model';
import { database } from '../database/database';

export const getAllPurchases = async (req: Request, res: Response) => {
    try {
        const purchase = await Purchase.findAll();
        res.json(purchase);
    } catch (err) {
        console.error('Error fetching purchases:', err);
        res.status(500).send('An error occurred while fetching purchases');
    }
};

export const getPurchaseById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const purchase = await Purchase.findByPk(id);
        if (!purchase) {
            return res.status(404).send(`purchase with ID ${id} not found`);
        }
        res.json(purchase);
    } catch (err) {
        console.error(`Error fetching purchase with ID ${id}:`, err);
        res.status(500).send(`An error occurred while fetching purchase with ID ${id}`);
    }
};

export const getPurchaseCount = async (req: Request, res: Response) => {
    try {
        const count = await Purchase.count();
        res.json({ count });
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).send('An error occurred while fetching customers');
    }
};