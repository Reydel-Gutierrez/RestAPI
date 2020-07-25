const routes = (app) => {

  app.route('/')
  .get((req, res) => {
    res.send(`This is the get method`)
  })

  .post((req, res) => {
    res.send(`This is post method`)
  })

  .put((req, res) => {
    res.send(`This is the put method`)
  })

  .delete((req, res) => {
    res.send(`This is the delete method`)
  })

}

module.exports = routes;
