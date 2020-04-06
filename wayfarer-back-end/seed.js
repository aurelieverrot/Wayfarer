const db = require('./models');

const cities = [
  {
    name: "San Francisco",
    country: "United States of America",
    photo: "https://sfchamber.com/wp-content/uploads/2017/11/merlin_136702122_448a1ddc-b5e9-4303-bc0d-701c9addf3f3-superJumbo.jpg",
  },

  {
    name: "New York City",
    country: "United States of America",
    photo: "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg",
  },

  {
    name: "Lyon",
    country: "France",
    photo: "https://www.radiologyintl.com/_webedit/cached-images/547-820-547-0-0-820-547.jpg",
  },
  {
    name: "Sacramento",
    country: "United States of America",
    photo: "https://cdngeneral.rentcafe.com/dmslivecafe/3/20424/Sacramento%20River%20with%20yellow%20bridge.jpg?crop=(0,70,300,200)&cropxunits=300&cropyunits=200&quality=85&scale=both&",
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

      });
    });
  });
});
