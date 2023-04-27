import request from 'supertest';
import { Claim } from '../database/models/claim.model';

const baseURL = "http://localhost:3000/";

describe('Claims API', () => {
    const controller = "claims";
    describe('GET /getAllClaims', () => {
        it('should return a list of claims with count and a 200 status code', async () => {
            const response = await request(baseURL).get(`${controller}/getAllClaims?limit=10&page=1`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.claims)).toBe(true);
            expect(typeof response.body.count).toBe('number');
        });
    });

    describe('GET /claims/getClaimById/:id', () => {
        it('should return a specific claim with a 200 status code', async () => {
            const claim = await Claim.findOne();
            const exampleId = claim.dataValues.id;
            const response = await request(baseURL).get(`${controller}/getClaimById/${exampleId}`);
            expect(response.status).toBe(200);
            expect(response.body.customerId).toBe(claim.dataValues.customerId);
            expect(response.body.description).toBe(claim.dataValues.description);
        });
    });

    describe('GET /claims/customer/:customerId', () => {
        it('should return a list of claims with a 200 status code', async () => {
            const claim = await Claim.findOne();
            const exampleCustId = claim.dataValues.customerId;
            const response = await request(baseURL).get(`${controller}/getAllClaimsByClientId/${exampleCustId}`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
            response.body.forEach((claim) => {
                expect(claim.customerId).toBe(exampleCustId);
            });
        });
    });

    describe('GET /claims/customer/:customerId should return 404 on customer that does not exist', () => {
        it('should return a 404 status code if the claim does not exist', async () => {
            const response = await request(baseURL).get(`${controller}/getClaimById/999`);
            expect(response.status).toBe(404);
            expect(response.text).toBe('Claim with ID 999 not found');
        });
    });
});
