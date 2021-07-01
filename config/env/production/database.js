
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'host'),
        port: env.int('DATABASE_PORT', port_No),
        database: env('DATABASE_NAME', 'db_name'),
        username: env('DATABASE_USERNAME', 'username'),
        password: env('DATABASE_PASSWORD', 'password'),
       
        ssl: {
          rejectUnauthorized: false, // For self-signed certificates
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});


