import { database } from "./database";
import csvParser from 'csv-parser';
import fs from 'fs';
import path from 'path';
import { Claim } from './models/claim.model';
import { Customer } from './models/customer.model';
import { Purchase } from './models/purchase.model';

const seed_directory = path.join(__dirname, 'seed_data');
const files = fs.readdirSync(seed_directory, { withFileTypes: false }) as string[];

const seedFromCSV = (path: string) => {
    return new Promise<void>((resolve, reject) => {
        fs.createReadStream(path)
            .pipe(csvParser())
            .on('data', async (data) => {
                if (path.includes('customer')) {
                    const customer = Customer.build(data);
                    await customer.save();
                }
                if (path.includes('purchase')) {
                    const purchase = Purchase.build(data);
                    await purchase.save();
                }
                if (path.includes('claim')) {
                    const claim = Claim.build(data);
                    await claim.save();
                }
            })
            .on('end', () => {
                console.log(`CSV file ${path} successfully processed.`);
                resolve();
            })
            .on('error', (err) => {
                reject(err);
            });
    })
};

(async () => {
    await database.sync({ force: true }); // Sync the model with the database and drop any existing data
    const promises = files.map((path) => {
        seedFromCSV(`${__dirname}/seed_data/${path}`);
    });

    try {
        await Promise.all(promises);
        console.log('All CSV files successfully processed');
    } catch (err) {
        console.error('Error processing CSV files:', err);
    }
})();






