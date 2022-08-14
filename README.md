

# Full stack developer test for Bluewinds

This test is for a career position at BlueWinds and will test your back-end skills.

## Purpose
The intended purpose is to test your backend skills, ranging from System design, and API development.


## Design tasks

1. Create an Express project [Express](https://expressjs.com/).
2. Create simple end-points in which a user can register and login
3. Use MongoDb as backend database put a .env file from which you will load the database path

## API tasks

1. You need to create an end-pooint called 'load_categories'
2. You need to integrate this [API](https://demo2.meals4u.net/fe/api.test.php), so whenever I hit the end-point it will return me the result from this api.
3. The end-point should be auth protected, so it can't be accessed publicly 

## Tools and technologies

1. Express
2. Mongoose
3. JWT auth (Recommened) 
4. MongoDb

## How to submit?
1. Fork this repository
2. Do your tasks
3. Commit your changes
4. Push them
5. Add "How to run instruction" in the area below

## How to run?
For Initial setup and activate backend, follow below instructions
- Database connection
  - SET Database varibles(Local/Remote) at [Address Variable](./lib/CONSTANTS.js#L21)
  - SET Database Tables from [Table Names](./lib/CONSTANTS.js#L26)
  - Assign Database varibles to ConnectionURI at [MongoDb Connection URI](./index.js#L20)
- Follow Srcipts
  - `npm i`
  - `npm start`
- [API(s) Routes List](./lib/CONSTANTS.js#L9)
## Deadline
Please complete it within 3 days of assignment. 

## Popular resources
1. [Express](https://expressjs.com/en/starter/installing.html)
2. [Mongoose](https://www.npmjs.com/package/mongoose) (Hint: this can make your life really easier and will give you additional points)

