import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Notes = db.define('notes', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    datetime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    note: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    }
}, {
    freezeTableName:true,
    timestamps: false
});

export default Notes;

(async()=>{
    await db.sync();
})();