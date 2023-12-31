const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		products: './src/js/products.js',
		inspect: './src/js/inspect.js',
	},
	output: {
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
