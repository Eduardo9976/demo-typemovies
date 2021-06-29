const path = require('path');

module.exports = {
  mode: 'development', // Modo desenvolvimento para não minificar o arquivo js
  entry: './src/ts/index.ts', // Pasta de entrada arquivos TS
  module: {
    rules: [
      {
        test: /\.tsx?$/, //Procurar por todos arquivos que tenham ts ou tsx como entensão
        use: 'ts-loader', //TS para compilar o arquivo
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js', //Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist', 'assets', 'js'), //destino do arquivo da saída dist/assets/js/__dinername
  },
  devtool: 'source-map' //exibir linha exata do erro
};
