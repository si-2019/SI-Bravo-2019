/* jshint indent: 1 */
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Issue', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		status: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		procitaoStudent: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		procitalaSS: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		},
		draftStatus: {
			type: DataTypes.BOOLEAN(0),
			allowNull: false
		},
		trashStudent: {
			type: DataTypes.INTEGER(3),
			allowNull: false
		},
		trashSS: {
			type: DataTypes.INTEGER(3),
			allowNull: false
		},
		datum: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW 
		}
	}, {
		tableName: 'Issue'
	});
};
