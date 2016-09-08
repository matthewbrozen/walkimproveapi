var _ = require('lodash');

var localEnvVars = {
  TITLE:          'Auth App',
  SAFE_TITLE:     'auth-app',
  TOKEN_SECRET:   'hidethisinadotenvfile'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
