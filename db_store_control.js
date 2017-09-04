module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, type, price } = req.body;
     dbInstance.create_store([ name, type, price ])
      .then( () => res.status(200).send() )
      .catch( (err) => res.status(500).send(err) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.read_store([ params.id ])
      .then( (store) => res.status(200).send( store ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_stores()
      .then( (stores) => res.status(200).send(stores) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;
    dbInstance.update_store([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.delete_store([params.id])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};
