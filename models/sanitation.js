/*
 * property-rate ==> sanitation
 * Created By barnabasnomo on 1/22/18 at 5:48 PM
 * @soundtrack Otis - Kanye West/Jay-Z/Otis Redding
*/
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let SanSchema = new Schema({
    code: String,
    name: String,
    rate: Number
});


module.exports = mongoose.model('San', SanSchema);


/*

    {
        code:'S-NORM',
        name:'Normal',
        rate: 10
    },{
        code:'S-REST',
        name:'Restaurant',
        rate: 240
    },{
        code:'S-CHOP',
        name:'Chop Bar',
        rate: 120
    },{
        code:'S-FAST',
        name:'Fast Food',
        rate: 60
    }
*/