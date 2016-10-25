declare module 'dojo/node!path' {
	export * from 'path';
}

declare module 'dojo/node!url' {
	export * from 'url';
}

declare module 'dojo/node!fs' {
	export * from 'fs';
}

declare module 'dojo/node!http' {
	export * from 'http';
}

declare module 'dojo/node!net' {
	export * from 'net';
}

declare module 'dojo/node!mimetype' {
	export function lookup(input: string): (string|false);
}

declare module 'dojo/node!istanbul/lib/collector' {
	export * from 'istanbul/lib/collector';
}

declare module 'dojo/node!istanbul/lib/report/cobertura' {
	export * from 'istanbul/lib/report/cobertura';
}
