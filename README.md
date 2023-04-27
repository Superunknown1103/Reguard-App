The system architecture for this solution can be viewed here: https://lucid.app/lucidchart/9e9c1456-eed2-4bb2-8999-66452c36af12/edit?viewport_loc=-104%2C400%2C1280%2C654%2C0_0&invitationId=inv_03cb7e2f-a032-483a-9d1d-de4883a4fb3a

## Data Engineering -> Creating and Seeding the Database

- cd into reguard-back to access the backend application
- this application uses mysql. To initalize the database, run database.ts file with the command `ts-node database/index.ts`. 
- you will then need to seed the database, make sure to drop the csv files into a new `seed_data` folder under the `database` folder. Then run the command `ts-node database/seed.ts` to seed data.

## API Design -> 

- to start the backend express server, run app.js. 
- Once that is running, take a look at the possible endpoints listed under the routes comment in reguard-back/app.ts. You can use your browser and visit localhost://3000/ - replace 3000 with a different port if you specified one in your process.env and call these routes to take a look at the seeded data returned by the api. 

## UI 

- Switch to the front end (reguard-front) folder and run npm start in your terminal. It should start a front-end application in your browser on port 3006.
- The UI renders a table, which should show customers by default. You can click on the Nav component buttons (Claims, Customers, Purchases) to see different data displayed in the table. 
- I was going to add a detail page for each row, but figured I'd spent enough time on the project as it was and this was something we can add later. By the time I had gotten it to this state, I realized I could have used React Router for rendering my table as well, so that's something to consider adding in the paired interview.

Thanks!

