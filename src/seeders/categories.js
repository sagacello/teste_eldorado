module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert(
        'Categories',
        [
          {
            name: 'cell',
          },
          {
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
  