const express = require('express');

var app = express();

app.get('/hello/:name', function(request, response){
    console.log(`got request for /hello/${request.params.name}/`);
    response.status(200).send(`hello ${request.params.name}`);
});

app.get(['/Apple', '/Ale'], function(request, response){
    response.status(200).send('Apple or Ale?');
})

app.get('/:firstname/:lastname', function(request, response) {
    response.status(200).send(`Hello ${request.params.firstname} ${request.params.lastname}`);
});

app.get('/:string', function(request, response) {
    response.status(200).send(`Reversed: ${request.params.string.split("").reverse().join("")}`);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
