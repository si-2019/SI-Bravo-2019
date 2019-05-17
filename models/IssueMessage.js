/* jshint indent: 1 */
var Sequelize = require("sequelize");


module.exports = function(sequelize, DataTypes) {
	return sequelize.define('IssueMessage', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		tekst: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		datum: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW 
		},
		
		issueID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'Issue',
				key: 'id'
			}
		}
	}, {
		tableName: 'IssueMessage'
	});
};
