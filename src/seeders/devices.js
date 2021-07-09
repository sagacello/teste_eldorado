module.exports = {
    up: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkInsert(
        'Devices',
        [
          {
            color: 'red',
            partNumber: 123789,
            categoryId: 1
          },
          {
            color: 'black',
            partNumber: 1234789,
            categoryId: 2
          },
        ],
        { timestamps: false }
      );
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('Devices', null, {});
    },
  };
  