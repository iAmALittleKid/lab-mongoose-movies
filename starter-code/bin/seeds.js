const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
    {
        name: "Nipsey Hussle",
        occupation: "Rapper",
        catchPhrase: "Stucc in the Grind",
    },
    {
        name: "Lil Wayne",
        occupation: "Rapper",
        catchPhrase: "Young Mulla Baby",        
    },
    {
        name: "Lionel Messi",
        occupation: "Footballer",
        catchPhrase: "El Mejor",        
    },
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    mongoose.connection.close();
  });