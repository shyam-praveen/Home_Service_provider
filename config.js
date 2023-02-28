const config = {};

process.env.NODE_ENV = 'development';
const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;

config.PORT = isDevelopment ? 5000 : process.env.PORT || 5000;
config.API_VERSION = isDevelopment ? '/v1' : process.env.API_VERSION || '/v1';
config.NODE_ENV = process.env.NODE_ENV;
config.DB_STRING = isDevelopment ? "mongodb://localhost:27017/minip" : process.env.DB_STRING;
config.SECREATE = isDevelopment ? 'development' : process.env.SECREATE;

console.log(config, 'config');
module.exports = { config };
