const db = require('./models');

const users = [
  {
  firstName: "Leanne",
  lastName: "Graham",
  email: "Sincere@april.biz",
  password: "12345",
  city: "Gwenborough",
  photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  posts: [],
  comments: []
  },
  {
  firstName: "Ervin",
  lastName: "Howell",
  email: "Shanna@melissa.tv",
  password: "12345",
  city: "Wisokybugh",
  photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  posts: [],
  comments: []
  },
  {
  firstName: "Clementine",
  lastName: "Bauch",
  email: "Nathan@yesenia.net",
  password: "12345",
  city: "McKenziehaven",
  photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  posts: [],
  comments: []
  },
  {
  firstName: "Patricia",
  lastName: "Lebsack",
  email: "Julianne.OConner@kory.org",
  password: "12345",
  city: "South Elvis",
  photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  posts: [],
  comments: []
  },
  {
  firstName: "Chelsey",
  lastName: "Dietrich",
  email: "Lucio_Hettinger@annie.ca",
  password: "12345",
  city: "Roscoeview",
  photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  posts: [],
  comments: []
  },
  {
  firstName: "Mrs. Dennis Schulist",
  lastName: "Leopoldo_Corkery",
  email: "Karley_Dach@jasper.info",
  password: "12345",
  city: "South Christy",
  photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  posts: [],
  comments: []
  }
]

const seedDatabase = async () => {
  try {
    await db.User.deleteMany({});
    console.log('Deleted previous users...');
    let createdUsers = await db.User.create(users);
    console.log(`Created ${createdUsers.length} users...`);
    console.log(createdUsers);
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
}

seedDatabase();