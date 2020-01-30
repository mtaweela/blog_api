module.exports = {
  up: async (queryInterface) => queryInterface
    .bulkInsert('Users', [
      {
        username: 'user1',
        isAdmin: true,
        password: '$2b$10$WdpLupe9FgatWk7BGMA/qu6oPNS8MV1rewefoMlme4T5j1/lfGIqq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        isAdmin: true,
        password: '$2b$10$WdpLupe9FgatWk7BGMA/qu6oPNS8MV1rewefoMlme4T5j1/lfGIqq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user3',
        isAdmin: true,
        password: '$2b$10$WdpLupe9FgatWk7BGMA/qu6oPNS8MV1rewefoMlme4T5j1/lfGIqq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
