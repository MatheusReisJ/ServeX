/**
 * @Authors: Matheus Reis <matheusdrdj@gmail.com>
 *           Raphael Nepomuceno <raphael.nepomuceno@ufv.br>
 * @Date:   2017-11-06
 */

export default (seq, DataTypes) => seq.define('contract', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		totalPrice: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false
		},
		hoursSpent: DataTypes.FLOAT,
		startDate: DataTypes.DATE,
		endDate: DataTypes.DATE,
	})
