'use strict';

module.exports = {
  up: (queryInterface, _Sequelize) => {
    return queryInterface.sequelize.query(`
      INSERT INTO Todos (title, isFinished, updatedAt, createdAt)
      VALUES
        ('todo # 1', false, datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 2', true,  datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 3', true,  datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 4', false, datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 5', false, datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 6', false, datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 7', false, datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 8', true,  datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 9', true,  datetime('now','localtime'), datetime('now','localtime')),
        ('todo # 10', true, datetime('now','localtime'), datetime('now','localtime'));
    `);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      DELETE FROM Todos;
    `);
  },
};
