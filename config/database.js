module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db-postgresql-sgp1-95962-do-user-9442771-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', '25060'),
        database: env('DATABASE_NAME', 'defaultdb'),
        username: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'l9fpixk7khnc1hiz'),
       
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
