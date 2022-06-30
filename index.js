const axios = require('axios');

module.exports = {
	/**
	* Connected_users function
	* Return number
	* @param {String} Ip     Server IP
	* @param {Number} Port Optional server port
	*/
	connected_users: function (ip, port) {
		return new Promise(function (res, rej) {
			axios.get(`http://${ip}:${port ? port : 30120}/players.json`, {
				timeout: 5000
			}).then(function (response) {
				data = response.data;
				res(data.length);
			}).catch(function (error) {
				rej(error);
			});
		});
	},

	/**
	* Max_users function
	* Return number
	* @param {String} Ip     Server IP
	* @param {Number} Port Optional server port
	*/
	max_users: function (ip, port) {
		return new Promise(function (res, rej) {
			axios.get(`http://${ip}:${port ? port : 30120}/info.json`, {
				timeout: 5000
			}).then(function (response) {
				data = response.data;
				res(data.vars.sv_maxClients ? data.vars.sv_maxClients : undefined)
			}).catch(function (error) {
				rej(error);
			});
		});
	},

	/**
	* User_list function
	* Return JSON with Name, ServerID and Ping
	* @param {String} Ip     Server IP
	* @param {Number} Port Optional server port
	*/
	user_list: function (ip, port) {
		return new Promise(function (res, rej) {
			axios.get(`http://${ip}:${port ? port : 30120}/players.json`, {
				timeout: 5000
			}).then(function (response) {
				data = response.data;
				res(data.map(user => {
					return { id: user.id, nick: user.name, ping: user.ping };
				}));
			}).catch(function (error) {
				rej(error);
			});
		});
	}
}