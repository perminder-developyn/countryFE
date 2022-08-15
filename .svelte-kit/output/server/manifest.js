export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-ed33eca4.js","imports":["_app/immutable/start-ed33eca4.js","_app/immutable/chunks/index-d7ab43fc.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "data",
				pattern: /^\/data\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/data.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
