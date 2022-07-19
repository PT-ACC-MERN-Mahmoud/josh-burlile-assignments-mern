const PersonController = require('../controllers/person.controller');
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople); 
    app.get('/api/people/:id', PersonController.getPerson);

//can be the same route as POST as long as we have a different http verb

}