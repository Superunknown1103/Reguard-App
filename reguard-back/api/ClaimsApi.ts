import { Request, Response } from 'express';
import { Claim } from '../database/models/claim.model';

export const getAllClaims = async (req: Request, res: Response) => {
    try {
        const { limit = 10, page = 1 } = req.query;
        const parsedLimit = parseInt(limit as string, 10);
        const offset = (page as number - 1) * parsedLimit;
        const count = await Claim.count();
        const claims = await Claim.findAll(({ limit: parsedLimit, offset }));
        res.json({claims, count});
    } catch (err) {
        console.error('Error fetching claims:', err);
        res.status(500).send('An error occurred while fetching claims');
    }
};

export const getClaimById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const claim = await Claim.findByPk(id);
        if (!claim) {
            return res.status(404).send(`Claim with ID ${id} not found`);
        }
        res.json(claim);
    } catch (err) {
        console.error(`Error fetching claim with ID ${id}:`, err);
        res.status(500).send(`An error occurred while fetching claim with ID ${id}`);
    }
};

export const getClaimCount = async (req: Request, res: Response) => {
    try {
        const count = await Claim.count();
        res.json({ count });
    } catch (err) {
        console.error('Error fetching customers:', err);
        res.status(500).send('An error occurred while fetching customers');
    }
};

export const getAllClaimsByCustomerId = async (req: Request, res: Response) => {
    const customerId = req.params.customerId;
    console.log(customerId);
  
    try {
      const claims = await Claim.findAll({
        where: { customerId },
      });
  
      res.json(claims);
    } catch (err) {
      console.error('Error fetching claims:', err);
      res.status(500).send('An error occurred while fetching claims');
    }
  }; 
