const convict = require('convict');
const fs = require('fs');
const path = require('path');

const config = convict({
  env: {
    doc: `Environment the application is running in.`,
    format: String,
    default: `production`,
    env: `NODE_ENV`,
    arg: `env`
  },
  server: {
    port: {
      doc: `Port for the server to listen on.`,
      default :`3000`,
      format: `port`,
      env: `PORT`
    }
  }
});

const env = config.get(`env`);
const filepath = path.join(__dirname, `config.${env}.json`);
if (fs.existsSync(filepath)) {
  config.loadFile(filepath);
}

config.validate();

module.exports = config.get();
