module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, type } = req.body;
     dbInstance.create_activity([ name, type ])
      .then( () => res.status(200).send() )
      .catch( (err) => res.status(500).send(err) );
  },

  getOne: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.read_activity([ params.id ])
      .then( (activity) => res.status(200).send( activity ) )
      .catch( () => res.status(500).send() );
  },

  getAll: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_activities()
      .then( (activities) => res.status(200).send(activities) )
      .catch( () => res.status(500).send() );
  },

  update: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params, query } = req;
    dbInstance.update_activity([ params.id, query.desc ])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  },

  delete: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    dbInstance.delete_activity([params.id])
      .then( () => res.status(200).send() )
      .catch( () => res.status(500).send() );
  }
};
