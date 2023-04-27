import request from 'supertest';
import { Customer } from '../database/models/customer.model';

const baseURL = "http://localhost:3000/";

describe('Customers API', () => {
    const controller = "customers";
    describe('GET /getAllCustomers', () => {
        it('should return a list of claims with count and a 200 status code', async () => {
            const response = await request(baseURL).get(`${controller}/getAllCustomers?limit=10&page=1`);
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body.customers)).toBe(true);
            expect(typeof response.body.count).toBe('number');
        });
    });

    describe('GET /customers/getCustomerById/:id', () => {
        it('should return a specific claim with a 200 status code', async () => {
            const customer = await Customer.findOne();
            const exampleId = customer.dataValues.id;
            const response = await request(baseURL).get(`${controller}/getCustomerById/${exampleId}`);
            console.log(response);
            expect(response.status).toBe(200);
            expect(response.body.customerId).toBe(customer.dataValues.customerId);
            expect(response.body.description).toBe(customer.dataValues.description);
        });
    });

    describe('GET /customers/getCustomerById/:customerId should return 404 on customer that does not exist', () => {
        it('should return a 404 status code if the claim does not exist', async () => {
            const response = await request(baseURL).get(`${controller}/getCustomerById/999`);
            expect(response.status).toBe(404);
            expect(response.text).toBe('Customer with ID 999 not found');
        });
    });
});