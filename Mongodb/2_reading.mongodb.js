use ('ecommers');

// db.products.find();
// db.products.find({ "pricing": 50000});

// db.contacts.find();
// db.contacts.find({ "name": "Laksh Patil"});

// its used to format the output in a more readable way
// db.products.find().pretty();


// db.products.find({ pricing: { $gt: 10000 } }); //$gt means greater than

//$gte means greater than equal to and $lte means less than equal to
// db.products.find({ pricing: { $gte: 1000, $lte: 20000 } });


// db.products.find({ $or: [{ category: "Hardware" }, { pricing: { $lt: 20000 } }] });


// its used to project specific fields
// db.products.find({}, { name: 1, pricing: 1, _id: 0 });

// its used to sort the output
// db.contacts.find().sort({ name: -1 }).skip(0).limit(2); // 1 for ascending and -1 for descending

// abbove querry are use for reading the data from the database