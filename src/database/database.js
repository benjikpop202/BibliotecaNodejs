import { Sequelize } from "sequelize";

export const BibliotecaDB = new Sequelize('bibliotecanodejs','root', '081202',{
 host: 'localhost',
 dialect: 'mysql'
})