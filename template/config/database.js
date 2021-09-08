const mysql = () => ({
  connector: 'bookshelf',
  settings: {
    client: 'mysql',
    host: env('DATABASE_HOST', '127.0.0.1'),
    port: env.int('DATABASE_PORT', 3306),
    database: env('DATABASE_NAME', 'jaden'),
    username: env('DATABASE_USERNAME', 'root'),
    password: env('DATABASE_PASSWORD', 'secret'),
    ssl: env.bool('DATABASE_SSL', false),
  },
  options: {}
});

const sqlite = (env) => ({
  connector: 'bookshelf',
  settings: {
    client: 'sqlite',
    filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  },
  options: {
    useNullAsDefault: true,
  },
});

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: env('NODE_ENV', 'local') ? sqlite(env) : mysql(env)
  },
});
