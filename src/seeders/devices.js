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
            categoryId: 1
          },
          {
            color: 'white',
            partNumber: 1234289,
            categoryId: 2
          },
          {
            color: 'green',
            partNumber: 1234289,
            categoryId: 2
          },
          {
            color: 'yellow',
            partNumber: 1234289,
            categoryId: 2
          },
          {
            color: 'black',
            partNumber: 1211789,
            categoryId: 2
          },
          {
            color: 'black',
            partNumber: 1211789,
            categoryId: 3
          },
          {
            color: 'black',
            partNumber: 442422,
            categoryId: 3
          },
          {
            color: 'red',
            partNumber: 12233789,
            categoryId: 4
          },
          {
            color: 'red',
            partNumber: 123111789,
            categoryId: 1
          },
          {
            color: 'black',
            partNumber: 123111789,
            categoryId: 1
          },
        ],
        { timestamps: false }
      );
    },
  
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.bulkDelete('Devices', null, {});
    },
  };
  