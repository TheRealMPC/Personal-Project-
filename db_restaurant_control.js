module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, type, price } = req.body;
     dbInstance.create_restaurant([ name, type, price ])
      .then( () => res.status(200).send() )
      .catch( (err) => res.status(500).send(err) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.read_restaurant([ params.id ])
      .then( (restaurant) => res.status(200).send( restaurant ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_restaurants()
      .then( (restaurants) => res.status(200).send(restaurants) )
      .catch( (err) => res.status(500).send(err) );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;
    dbInstance.update_restaurant([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.delete_restaurant([params.id])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};
