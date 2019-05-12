const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Issue = sequelize.define("issue",{
		id:{
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		
        status:{
			type: Sequelize.STRING,
			unique: false,
			allowNull: false
		},
		
		procitaoStudent: {
			type: Sequelize.BOOLEAN,
			unique: false,
			allowNull: false
		},
		
		procitalaSS: {
			type: Sequelize.BOOLEAN,
			unique: false,
			allowNull: false
		}
	
       
    })
    return Issue;
};