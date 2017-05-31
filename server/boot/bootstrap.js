'use strict'

const Promise = require('bluebird');

var User = null;
var Role = null;
var RoleMapping = null;
module.exports = function (app) {
  User = app.models.User;
  Role = app.models.Role;
  RoleMapping = app.models.RoleMapping;
  createUser({username: 'admin', email: 'admin@gistda.org', password: 'admin'})
    .then(createAdminRole)
    .then(createRoleMapping)
    .catch(function (err) {
      console.log(err);
    })
};

function createRoleMapping(data){
  return new Promise(function(resolve, reject){
    RoleMapping.findOne({where: {principalId: data.user.id, roleId: data.role.id}})
      .then(function(rm){
        if(!rm){
          console.log('create rm')
          RoleMapping.create({principalId: data.user.id, roleId: data.role.id, principalType: RoleMapping.USER})
            .then(function(rm){
              console.log('created rm')
            })
        }else{
          console.log('already have rm')
        }
      })
  })
}

function createUser(user) {
  return new Promise(function (resolve, reject) {
    User.findOne({where: {username: user.username}})
      .then(function (u) {
        if (!u) {
          User.create(user)
            .then(function (u) {
              resolve(u)
            })
            .catch(function (e) {
              reject(e)
            })
        } else {
          resolve(u)
        }
      })
      .catch(function (e) {
        reject(e)
      })
  })
}


function createAdminRole(user) {
  return new Promise(function (resolve, reject) {
    Role.findOne({where: {name: 'admin'}})
      .then(function (role) {
        if (!role) {
          Role.create({name: 'admin'})
            .then(function (role) {
              resolve({user: user, role: role})
            })
            .catch(function (err) {
              reject(err)
            })
        } else {
          resolve({user: user, role: role})
        }
      })
      .catch(function (err) {
        reject(err)
      })
  })

}