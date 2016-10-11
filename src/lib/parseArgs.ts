export function fromCommandLine(rawArgs: string[]) {
	return parseArguments(rawArgs || process.argv.slice(2), function (str: string) {
		return str;
	});
}

export function fromQueryString(query: string) {
	return parseArguments(query.replace(/^\?/, '').split('&'), function (str) {
		// Boolean properties should not be coerced into strings, but will be if they are passed to
		// decodeURIComponent
		if (typeof str === 'boolean') {
			return str;
		}

		return decodeURIComponent(str);
	});
}

function parseArguments(rawArgs: string[], decode: (str: string) => any) {
	let args: { [key: string]: any } = {};
	rawArgs.forEach(function (arg) {
		const parts = arg.split('=');

		const key: string = parts[0].replace(/^--?/, '');
		let value: any;

		// Support boolean flags
		if (parts.length < 2) {
			value = true;
		}
		else {
			value = decode(parts[1]);

			// Support JSON-encoded properties for reporter configuration
			if (value.charAt(0) === '{') {
				value = JSON.parse(value);
			}
			else if (value.slice(0, 2) === '\\{') {
				value = value.slice(1);
			}
		}

		// Support multiple arguments with the same name
		if (key in args) {
			if (!Array.isArray(args[key])) {
				args[key] = [ args[key] ];
			}

			args[key].push(value);
		}
		else {
			args[key] = value;
		}
	});

	return args;
}
