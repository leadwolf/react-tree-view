module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactTreeView',
      externals: {
        react: 'React'
      }
    }
  }
}
