const express = require('express');
const session = require('express-session');
const { json } = require('body-parser')
const request = require('request');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const PORT = process.env.PORT || 3000;
const app = express();

const db_activity_control = require('./db_activity_control');
const db_restaurant_control = require('./db_restaurant_control');
const db_store_control = require('./db_store_control');



app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

app.use(cors());
app.use(json());

// app.use(express.static(__dirname + '/public'));

massive(config.massiveConnectionString).then(dbInstance => {
  app.set("db", dbInstance);
})

app.post( '/api/activities', db_activity_control.create );
app.post( '/api/restaurants', db_restaurant_control.create );
app.post( '/api/stores', db_store_control.create );

app.get( '/api/activities', db_activity_control.getAll );
app.get( '/api/activity/:id', db_activity_control.getOne );
app.get( '/api/restaurants', db_restaurant_control.getAll );
app.get( '/api/restaurant/:id', db_restaurant_control.getOne );
app.get( '/api/stores', db_store_control.getAll );
app.get( '/api/store/:id', db_store_control.getOne );

app.put( '/api/activity/:id', db_activity_control.update );
app.put( '/api/restaurant/:id', db_restaurant_control.update );
app.put( '/api/stores/:id', db_store_control.update );


app.delete( '/api/activity/:id', db_activity_control.delete );
app.delete( '/api/restaurant/:id', db_restaurant_control.delete );
app.delete( '/api/store/:id', db_store_control.delete );



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
