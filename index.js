//CCS0043LL Source Code for 3T AY 2022-2023

/*
    Program:    E-commerce API MVP requirements
    Programmer: Roman, Alessandra Dorothy Roman
    Section:    AN22
    Start Date: July 16, 2023
    End Date:   July 17, 2023
*/

const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')

const app = express();

mongoose.connect('mongodb+srv://admin:admin@sandbox.fdqvlpc.mongodb.net/finals_an22?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open',()=> console.log('Now connected to MongoDB Atlas'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)

app.listen(process.env.PORT || 4000, () => {
    console.log(`API is now online on port ${process.env.PORT ||4000}`)
});