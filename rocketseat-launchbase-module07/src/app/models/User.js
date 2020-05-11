const db = require('../../config/db');

module.exports = {
  findOne(filters) {
    let query = 'SELECT * FROM users';

    Object.keys(filters).map((key) => {
      query = `${query}
            ${key}

        `;
    });
  },


};
