module.exports = {
  up: (queryInterface) => queryInterface
    .bulkInsert('Posts', [
      {
        title: 'Post 1',
        body: 'new post 1 from Mohamed.',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 2',
        body: 'new post 2 from Mohamed.',
        userId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 3',
        body: 'new post 3 from Mohamed.',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 4',
        body: 'new post 4 from Mohamed.',
        userId: 1,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 5',
        body: 'new post 5 from Mohamed.',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 6',
        body: 'new post 6 from Mohamed.',
        userId: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 7',
        body: 'new post 7 from Mohamed.',
        userId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 8',
        body: 'new post 8 from Mohamed.',
        userId: 3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Post 9',
        body: 'new post 9 from Mohamed.',
        userId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]),
  down: (queryInterface) => queryInterface.bulkDelete('Posts', null, {}),

};
