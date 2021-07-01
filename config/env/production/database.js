
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db-postgresql-nyc3-95945-do-user-8524638-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', '25060'),
        database: env('DATABASE_NAME', 'defaultdb'),
        username: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'tu4xhc3t0yqpf2x1'),
       
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


