/**
 * @Authors: Matheus Reis <matheusdrdj@gmail.com>
 *           Raphael Nepomuceno <raphael.nepomuceno@ufv.br>
 * @Date:   2017-11-06
 */

export default (seq, DataTypes) => seq.define('review', {
        id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
        },
        rating: DataTypes.DECIMAL(10, 2),
        message: DataTypes.STRING
    })
