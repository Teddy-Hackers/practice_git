const lib = require('common');


module.exports.check = function check(username, token, callback) {
  var results = [];
  var url = 'https://api.github.com/repos/' + username + '/practice_git';

  function add_task(name) {
    results.push({
      'name': name,
      'html_url': 'https://github.com/Teddy-Hackers/practice_git/blob/master/docs/' + name + '.md',
      'status': 'neutral'
    });
  }

  add_task('repository');
  add_task('branch');
  add_task('commit');

  // Check that fork exists
  lib.github_api_get(url, token, () => {
    results[0].status = 'success';

  // Check that branch exists
  lib.github_api_get(url + '/branches', token, (branches) => {
    var created = false;
    for (var i = 0; i < branches.length; ++i) {
      if (branches[i].name.localeCompare('my_new_branch') == 0) {
        created = true;
        break;
      }
    }
    if (!created) {
      callback(results);
      return;
    }
    results[1].status = 'success';

  // Check pushed commit
  lib.github_api_get(url + '/commits/refs/heads/my_new_branch', token, (data) => {
    if (data.author.login.localeCompare(username) == 0) {
      results[2].status = 'success';
    }
    callback(results);
  }, (err) => { callback(results); });
  }, (err) => { callback(results); });  // no branch
  }, (err) => { callback(results); });  // no fork
}
