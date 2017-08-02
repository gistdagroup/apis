# Gistda GPS APIs
[![Build Status](https://travis-ci.org/gitsda/apis.svg?branch=master)](https://travis-ci.org/gitsda/apis)


## Loopback ACL
- document https://loopback.io/doc/en/lb3/Authentication-authorization-and-permissions.html
- example https://github.com/strongloop/loopback-example-access-control
- user management http://loopback.io/doc/en/lb3/Managing-users.html
- query http://loopback.io/doc/en/lb3/Where-filter.html
- before save https://loopback.io/doc/en/lb3/Operation-hooks.html#persist

## Mongo
### Indexing
```
db.location.index({date: 1})
db.location.reIndex()
db.location.getIndexes()
```


## APIs
### query location between date
```
http://0.0.0.0:3000/api/locations?[filter][where][date][between][0]=2017-06-22T16:52:46.000Z&[filter][where][date][between][1]=2017-06-22T16:52:49.000Z&[filter][where][vehicle]=pae&access_token=X6CIg5o4SSjEz9UbR9A1SyyBlhtwVAdTlG1Rm6GSvboj5CCBYSBtj8FV0SahQxOE
```
or
```
http://0.0.0.0:3000/api/locations?filter={"where":{"date":{"between":["2017-06-22T16:52:46.000Z","2017-06-22T16:52:48.000Z"]}}}&access_token=X6CIg5o4SSjEz9UbR9A1SyyBlhtwVAdTlG1Rm6GSvboj5CCBYSBtj8FV0SahQxOE
```

### login
```
curl -X POST \
  http://localhost:3000/api/users/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -d '{"email":"email","password":"password"}'
```

### register
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"email": "aaa%40aaa.com", "password":"aaa"}' 'http://0.0.0.0:3001/api/users?access_token=dO3qZzM6KBxHpNghr221hJqgaZld1zBFGZZuK7F0QYH5xRHip7t4PZFyLFnw3WzN'
```

### list user
```
curl -X GET --header 'Accept: application/json' 'http://0.0.0.0:3001/api/users?access_token=dO3qZzM6KBxHpNghr221hJqgaZld1zBFGZZuK7F0QYH5xRHip7t4PZFyLFnw3WzN'
```

### delete user
```
curl -X DELETE --header 'Accept: application/json' 'http://0.0.0.0:3001/api/users/592ea9efe36f062fa72baf08?access_token=dO3qZzM6KBxHpNghr221hJqgaZld1zBFGZZuK7F0QYH5xRHip7t4PZFyLFnw3WzN'
```

### Server send event
see https://loopback.io/doc/en/lb3/Realtime-server-sent-events.html
```
curl -H Accept:text/event-stream "http://localhost:3000/api/locations/change-stream?_format=event-source&access_token=${token}" --keepalive-time 2
```
client sample code
 ```
 var urlToChangeStream = '/api/MyModels/change-stream?_format=event-stream';
 var src = new EventSource(urlToChangeStream);
 src.addEventListener('data', function(msg) {
   var data = JSON.parse(msg.data);
   console.log(data); // the change object
 });
 ```
