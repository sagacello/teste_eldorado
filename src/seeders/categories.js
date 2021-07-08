module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert(
        'Categories',
        [
          {
            id: 1,
            name: 'cell',
          },
          {
            id: 2,
            name: 'computer',
          },
        ],
        { timestamps: false }
      );
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('Categories', null, {});
    },
  };
  