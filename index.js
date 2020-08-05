const lib = require('common');

module.exports.check = function check(username, token, callback) {
  lib.github_api_get('https://api.github.com/repos/' + username + '/practice_git', token, (repo) => {
    callback([{
      "name": "0_repository",
      "html_url": "",
      "status": "success"
    }]);
  }, (err) => {
    callback([{
      "name": "0_repository",
      "html_url": "",
      "status": "neutral"
    }]);
  });
}
