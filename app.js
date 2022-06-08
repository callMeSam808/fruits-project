const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');

  const fruitSchema = new mongoose.Schema({
    name: String,
    score: Number,
    review: String
  });

  const Fruit = mongoose.model('Fruit', fruitSchema);

  const apple = new Fruit({ 
    name: 'Apple',
    score: 8,
    review: "Great fruit"
  });

  // await apple.save();

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  const Person = mongoose.model('Person', personSchema);

  const person = new Person({ 
    name: 'John',
    age: 28,
  });

  // await person.save();

  const kiwi = new Fruit({
    name: 'Kiwi',
    score: 10,
    review: "The best fruit!"
  });

  const orange = new Fruit({
    name: 'Orange',
    score: 4,
    review: "Too sour for me"
  });

  const banana = new Fruit({
    name: 'Banana',
    score: 3,
    review: "Weird texture"
  });

  Fruit.insertMany([kiwi, orange, banana], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully saved all the fruits to fruitsDB");
    }
  });
}

