'use strict';
const path = require('path');
module.exports = function(app){

    var io = require('../controller/IOController');
    
    console.log("routing to the api")

    app.route('/api/getList')
        .get(io.getListOfUsers);
    
    app.route('/api/getEn/:currentUser')
        .get(io.getEnOfUsers);

    app.route('/api/postComment')
        .post(io.postComment);
	app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../operations/index.html'));
});    
}
