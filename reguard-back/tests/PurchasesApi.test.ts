import request from 'supertest';
import { Purchase } from '../database/models/purchase.model';

const baseURL = "http://localhost:3000/";

describe('Purchases API', () => {
    const controller = "purchases";
    describe('GET /getAllPurchases', () => {
        it('should return a list of claims with count and a 200 status code', async () => {
            const response = await request(baseURL).get(`${controller}/getAllPurchases?limit=10&page=1`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.purchases)).toBe(true);
            expect(typeof response.body.count).toBe('number');
        });
    });

    describe('GET /purchases/getPurchaseById/:id', () => {
        it('should return a specific claim with a 200 status code', async () => {
            const purchase = await Purchase.findOne();
            const exampleId = purchase.dataValues.id;
            const response = await request(baseURL).get(`${controller}/getPurchaseById/${exampleId}`);
            expect(response.status).toBe(200);
            expect(response.body.purchaseId).toBe(purchase.dataValues.purchaseId);
            expect(response.body.description).toBe(purchase.dataValues.description);
        });
    });

    describe('GET /purchases/:id should return 404 on purchase that does not exist', () => {
        it('should return a 404 status code if the claim does not exist', async () => {
            const response = await request(baseURL).get(`${controller}/getPurchaseById/999`);
            expect(response.status).toBe(404);
            expect(response.text).toBe('Purchase with ID 999 not found');
        });
    });
});