const { users } = require('../data/mock-users');
const _ = require("lodash");

exports.handler = function(event: any, context: any, callback: any) {
    return _.find(users, { id: event.id });
}