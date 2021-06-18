const request = require('request');

module.exports = {
	/**
	* Connected_users function
	* @param {String} Ip     Server IP
	* @param {Number} Port Optional server port
	*/
	connected_users: function (ip, port) {
		let promise = new Promise(function (res, rej) {
			let options = {
				url: `http://${ip}:${port ? port : 30120}/players.json`,
				timeout: 5000
			};
			let data
			request(options, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					try {
						data = JSON.parse(body);
						res(data.length)
					}
					catch (e) {
						rej("Error")
					}
				}
				else
					res("Invalid")
			})
		})
		return promise
	},

	/**
	* Max_users function
	* @param {String} Ip     Server IP
	* @param {Number} Port Optional server port
	*/
	max_users: function (ip, port) {
		let promise = new Promise(function (res, rej) {
			let options = {
				url: `http://${ip}:${port ? port : 30120}/info.json`,
				timeout: 5000
			};
			let data
			request(options, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					try {
						data = JSON.parse(body);
						res(data.vars.sv_maxClients ? data.vars.sv_maxClients : undefined)
					}
					catch (e) {
						rej("Error")
					}
				}
				else
					res("Invalid")
			})
		})
		return promise
	}
}