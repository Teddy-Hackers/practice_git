const lib = require('common');

module.exports.check = function check(username, token, callback) {
  var results = [];
  var url = 'https://api.github.com/repos/' + username + '/practice_git';
  var test_branch_name = 'my_new_branch';
  var num = 0;
  var num_tasks = 4;

  function add_task(name, test) {
    var id = results.length;
    results.push({
      'name': name,
      'html_url': 'https://github.com/Teddy-Hackers/practice_git/blob/master/docs/' + name + '.md',
      'status': 'neutral'
    });

    test((passed) => {
      if (passed) {
        results[id].status = 'success';
      }
      num += 1;
      if (num == num_tasks) {
        callback(results);
      }
    });
  }

// -----------------------------------------------------------------------------

  add_task('repository', function(passed) {
    // Check that fork exists
    lib.github_api_get(url, token, () => {
      passed(true);
    }, (err) => { passed(false); });
  });

// -----------------------------------------------------------------------------

  add_task('branch', function(passed) {
    // Check that branch exists
    lib.github_api_get(url + '/branches', token, (branches) => {
      var is_created = false;
      for (var i = 0; i < branches.length; ++i) {
        if (branches[i].name.localeCompare(test_branch_name) == 0) {
          is_created = true;
          break;
        }
      }
      passed(is_created);
    }, (err) => { passed(false); });
  });

// -----------------------------------------------------------------------------

  add_task('commit', function(passed) {
    // Check pushed commit
    lib.github_api_get(url + '/commits/refs/heads/' + test_branch_name, token, (data) => {
      passed(data.author.login.localeCompare(username) == 0);
    }, (err) => { passed(false); });
  });

// -----------------------------------------------------------------------------

  add_task('pull_request', function(passed) {
    lib.github_api_get('https://api.github.com/repos/Teddy-Hackers/practice_git/pulls?state=closed', token, (pulls) => {
      var is_merged = false;
      for (var i = 0; i < pulls.length; ++i) {
        if (pulls[i].merged_at && pulls[i].user.login.localeCompare(username) == 0) {
          is_merged = true;
          break;
        }
      }
      passed(is_merged);
    }, (err) => { passed(false); });
  });
}
