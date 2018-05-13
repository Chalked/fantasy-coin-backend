
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'fantasy-coin-dev'
    }
  },
  
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
