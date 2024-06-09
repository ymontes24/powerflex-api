import { Sequelize } from "sequelize";
import "dotenv/config";

class Database {
    constructor() {
        if (!Database.instance) {
            this.sequelize = new Sequelize(
                process.env.DATABASE_SCHEMA,
                process.env.DATABASE_USER,
                process.env.DATABASE_PASSWORD,
                {
                    host: process.env.DATABASE_HOST,
                    port: process.env.DATABASE_PORT,
                    dialect: 'mysql',
                    logging: false
                }
            );
            Database.instance = this;
        }

        return Database.instance;
    }
}

const database = new Database();
export default database.sequelize;