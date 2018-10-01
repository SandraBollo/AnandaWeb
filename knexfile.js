// Update with your config settings.

const devConfig = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'dba_devananda',
    password : 'ananda7',
    database : 'devananda'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}



module.exports = {
  development : devConfig,
  production : {}
};
