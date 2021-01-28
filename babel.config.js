module.exports = function (api) {
	api.cache(true);
	return {
		plugins: ["react-native-paper/babel"],
		presets: ["babel-preset-expo", "@babel/preset-flow"],
	};
};
