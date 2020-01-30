module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Categories', [
    {
      name: 'category 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'category 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'category 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
