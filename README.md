# Gistda GPS APIs
[![Build Status](https://travis-ci.org/gitsda/apis.svg?branch=master)](https://travis-ci.org/gitsda/apis)


## Loopback ACL
- document https://loopback.io/doc/en/lb3/Authentication-authorization-and-permissions.html
- example https://github.com/strongloop/loopback-example-access-control
- user management http://loopback.io/doc/en/lb3/Managing-users.html
- query http://loopback.io/doc/en/lb3/Where-filter.html

## Mongo
### Indexing
```
db.location.index({date: 1})
db.location.reIndex()
db.location.getIndexes()
```


## APIs
- query location between date
```
http://0.0.0.0:3000/api/locations?[filter][where][date][between][0]=2017-06-22T16:52:46.000Z&[filter][where][date][between][1]=2017-06-22T16:52:49.000Z&[filter][where][vehical]=pae&access_token=X6CIg5o4SSjEz9UbR9A1SyyBlhtwVAdTlG1Rm6GSvboj5CCBYSBtj8FV0SahQxOE
```
or
```
http://0.0.0.0:3000/api/locations?filter={"where":{"date":{"between":["2017-06-22T16:52:46.000Z","2017-06-22T16:52:48.000Z"]}}}&access_token=X6CIg5o4SSjEz9UbR9A1SyyBlhtwVAdTlG1Rm6GSvboj5CCBYSBtj8FV0SahQxOE
```
