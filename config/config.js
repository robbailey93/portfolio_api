const database = {
	paginator: {
		limit: 10,
		page: 1,
	},
	base_url: process.env.MONGODB_CONNECTION_STRING,
	host: process.env.MONGODB_HOST,
	port: process.env.MONGODB_PORT,
	name: process.env.MONGODB_DATABASE,
	username: process.env.MONGODB_USERNAME,
	password: process.env.MONGODB_PASSWORD,
	// process is the node process that creates a process object that is in the global scope
	// the process runs the environment
	//
	buildConnectionString: () => {
		// mongodb+srv://<username>:<password>@localhost/<database>?retryWrites=true&w=majority
		let connection_string = process.env.MONGODB_CONNECTION_STRING.replace(
			'<username>',
			process.env.MONGODB_USERNAME,
		)
			.replace('<password>', process.env.MONGODB_PASSWORD)
			.replace('<host>', process.env.MONGODB_HOST)
			.replace('<database>', process.env.MONGODB_DATABASE);
		if (!this.username && !this.password)
			connection_string = connection_string.replace(':@', '');
		return connection_string;
	},
};

module.exports = {
	database,
};
