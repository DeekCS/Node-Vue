npx sequelize-cli model:generate --name Users --attributes username:string,name:string,phone:string,age:integer,dob:dateonly


npx sequelize-cli seed:generate --name Users


npx sequelize-cli db:seed:all 

