/**
 * @Author: Raphael Nepomuceno <raphael.nepomuceno@ufv.br>
 * @Date:   2017-11-06
 */

export const SERVER_PORT = 44800

export const provinces = [
	{ name: 'Amazonas', value: 'AM'},
	{ name: 'Bahia', value: 'BA'},
	{ name: 'Ceará', value: 'CE'},
	{ name: 'Distrito Federal', value: 'DF'},
	{ name: 'Espírito Santo', value: 'ES'},
	{ name: 'Goiás', value: 'GO'},
	{ name: 'Maranhão', value: 'MA'},
	{ name: 'Mato Grosso', value: 'MT'},
	{ name: 'Mato Grosso do Sul', value: 'MS'},
	{ name: 'Minas Gerais', value: 'MG'},
	{ name: 'Pará', value: 'PA'},
	{ name: 'Paraná', value: 'PR'},
	{ name: 'Paraíba', value: 'PB'},
	{ name: 'Pernambuco', value: 'PE'},
	{ name: 'Piauí', value: 'PI'},
	{ name: 'Rio de Janeiro', value: 'RJ'},
	{ name: 'Rio Grande do Norte', value: 'RN'},
	{ name: 'Rio Grande do Sul', value: 'RS'},
	{ name: 'Rondônia', value: 'RO'},
	{ name: 'Roraima', value: 'RR'},
	{ name: 'São Paulo', value: 'SP'},
	{ name: 'Santa Catarina', value: 'SC'},
	{ name: 'Sergipe', value: 'SE'},
	{ name: 'Tocantins', value: 'TO'},
	{ name: 'Fora do Brasil', value: 'EX'}
]

const Postgres = [
	'postgres://postgres:servex@localhost:5432/servex', // URI
	{ // Options
		dialect: 'postgres',
		logging: false,
		define: { timestamps: false }
	}
]

const SQLite = [
	null, // URI
	null, // Username
	null, // Password
	{ // Options
		dialect: 'sqlite',
		storage: 'dev-db.sqlite3',
		define: { timestamps: false }
	}
]

export const schema = (() => {
	switch(process.env.USER)
	{
		case 'kurumi': return SQLite
		default: return Postgres
	}
})()
