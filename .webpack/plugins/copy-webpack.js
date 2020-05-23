import CopyWebpackPlugin from 'copy-webpack-plugin';

export default () => new CopyWebpackPlugin([ { from: 'public/assets', to: 'assets' } ] )
