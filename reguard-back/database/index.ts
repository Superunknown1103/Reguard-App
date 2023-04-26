import { database, createDatabase } from "./database";

require('./models/customer.model.ts');
require('./models/purchase.model.ts');
require('./models/claim.model.ts');

(async () => 
{
    await createDatabase();
    await database.sync({ force: true });
    // Code here
  })();