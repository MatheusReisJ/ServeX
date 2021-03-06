/**
 * @Authors: Matheus Reis <matheusdrdj@gmail.com>
 *           Raphael Nepomuceno <raphael.nepomuceno@ufv.br>
 * @Date:   2017-11-06
 */

export default function (sequelize, DataTypes)
{
	const Review = sequelize.define('review', {
		id: {
			primaryKey:    true,
			type:          DataTypes.UUID,
			defaultValue:  DataTypes.UUIDV4
		},
		rating:             DataTypes.DECIMAL(10, 2),
		message:            DataTypes.TEXT,
		senderId:   { type: DataTypes.UUID,   unique: 'rv' },
		receiverId: { type: DataTypes.UUID,   unique: 'rv' },
		contractId: { type: DataTypes.UUID,   unique: 'rv' },
	})

	return Review
}
