module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert(
        'Categories',
        [
          {
            id: 1,
            name: 'Foods',
          },
          {
            id: 2,
            name: 'drinks',
          },
        ],
        { timestamps: false }
      );
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('Specialities', null, {});
    },
  };
  