const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Kategorija = sequelize.define("kategorija",{
		id:{
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
        naziv:{
			type: Sequelize.STRING,
			unique: true,
			allowNull: false
		}
       
    })
    return Kategorija;
};