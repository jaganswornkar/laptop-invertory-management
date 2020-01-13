# laptop-invertory-management : backend
This is the backend of my laptop inventory management application and the source code is written in node js (javascript)<br/>
I have used MySQL database with migration and Sequelize query(ORM) to store data <br/>
app is hosted on AWS. <br/>

## Requirements and execution
1. You need to clone the repo(as mentioned in <a href="">`frontend`</a> ) and go to the backend directory. <br/>
2. Install all the dependencies in your local by running `npm install` command on your terminal. <br/>
3. setup your database detail in `config.json` file inside the config directory (you must install mysql).<br/>
4. also you need to add your google client id in server.js file to access google signin (verify/decode google access_token).<br/>
5. now after setup everything run `nodemon server.js` or `node server.js` to run backend. <br/>
6. along with backend you can run your frontend which will work in 3000 prot ( follow the <a href="https://github.com/jagannath-swarnkar/laptop-invertory-management/tree/master/frontend">`frontend`</a> directectory )
