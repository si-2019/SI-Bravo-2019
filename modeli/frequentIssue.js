const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const frequentIssue = sequelize.define("frequentIssue",{
		id:{
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		
        naziv:{
			type: Sequelize.STRING,
			unique: false,
			allowNull: false
		},
	
	    tekst:{
			type: Sequelize.STRING,
			unique: false,
			allowNull: false
		}
       
    })
    return frequentIssue;
};