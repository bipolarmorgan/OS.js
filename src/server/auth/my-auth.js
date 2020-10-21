/*
For more information about authentication adapters, visit:
- https://manual.os-js.org/v3/tutorial/auth/
- https://manual.os-js.org/v3/guide/auth/
- https://manual.os-js.org/v3/development/
*/
module.exports = (core, config) => ({
  login: (req, res) => {
    const {username} = req.body;

    return Promise.resolve({
      id: 1,
      username,
      groups: ['admin']
    });
  },

  logout: (req, res) => {
    return Promise.resolve(true);
  },

  register: (req, res) => {
    return Promise.reject(new Error('Registration not available'));
  }
});
