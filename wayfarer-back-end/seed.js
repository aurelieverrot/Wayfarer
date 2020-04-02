const db = require('./models');

const users = [
    {
        firstName: "Leanne",
        lastName: "Graham",
        email: "Sincere@april.biz",
        password: "12345",
        city: "Gwenborough",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    },

    {
        firstName: "Ervin",
        lastName: "Howell",
        email: "Shanna@melissa.tv",
        password: "12345",
        city: "Wisokybugh",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    },

    {
        firstName: "Clementine",
        lastName: "Bauch",
        email: "Nathan@yesenia.net",
        password: "12345",
        city: "McKenziehaven",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    },

    {
        firstName: "Patricia",
        lastName: "Lebsack",
        email: "Julianne.OConner@kory.org",
        password: "12345",
        city: "South Elvis",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
    },
];

const cities = [
    {
      name: "San Francisco",
      photo: "https://sfchamber.com/wp-content/uploads/2017/11/merlin_136702122_448a1ddc-b5e9-4303-bc0d-701c9addf3f3-superJumbo.jpg",
    },

    {
      name: "New York City",
      photo: "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
    },

    {
      name: "Lyon",
      photo: "https://www.radiologyintl.com/_webedit/cached-images/547-820-547-0-0-820-547.jpg",
    },
    {
      name: "Sacramento",
      photo: "https://cdngeneral.rentcafe.com/dmslivecafe/3/20424/Sacramento%20River%20with%20yellow%20bridge.jpg?crop=(0,70,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",
    },
];

const posts = [
  {
    title: 'Post One',
    body: 'This is the body for Post One.'
  },
  {
    title: 'Post Two',
    body: 'This is the body for Post Two.'
  },
  {
    title: 'Post Three',
    body: 'This is the body for Post Three.'
  },
  {
    title: 'Post Four',
    body: 'This is the body for Post Four.'
  },
];

// Delete All Cities
console.log('Deleting all cities...');

db.City.deleteMany({}, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }

    console.log(`Successfully deleted ${result.deletedCount} cities.`);

  // Delete All Posts
    console.log('Deleting all posts...');   
    db.Post.deleteMany({}, (err, result) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log(`Successfully deleted ${result.deletedCount} posts.`);

        // Delete All Users
        console.log('Deleting all users...');

        db.User.deleteMany({}, (err, result) => {
            if (err) {
              console.log(err);
              process.exit();
            };

            console.log(`Successfully deleted ${result.deletedCount} users.`);

            // Create New Cities
            console.log('Creating new cities...');
            db.City.create(cities, (err, newCities) => {
                if (err) {
                  console.log(err);
                  process.exit();
                };

                console.log(`Successfully created ${newCities.length} cities.`);

                // Create New Users
                console.log('Creating new users...');
                db.User.create(users, (err, newUsers) => {
                    if (err) {
                      console.log(err);
                      process.exit();
                    };

                    console.log(`Successfully created ${newUsers.length} users.`);

                    console.log('Creating new posts...');
                    db.Post.create(posts, (err, newPosts) => {
                        if (err) {
                            console.log(err);
                            process.exit();
                        };

                        console.log(`Successfully created ${newPosts.length} posts.`);
                        process.exit();
                    });
                });
            });
        });
    });
});
