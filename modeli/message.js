const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Message = sequelize.define("message",{
		id:{
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		
        tekst:{
			type: Sequelize.STRING,
			unique: false,
			allowNull: false
		},
		
		datum:{
			type: Sequelize.DATE,
			unique: false,
			allowNull: false
		}
       
    })
    return Message;
};