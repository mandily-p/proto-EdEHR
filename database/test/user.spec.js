var should = require('should')
const mongoose = require('mongoose')
var User = require('../models/user')

mongoose
.connect(
  'mongodb://localhost:27017/docker-node-mongo',
  { useNewUrlParser: true }
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

/* global describe it */
describe('user', function () {
  it('should be invalid if id is empty', function (done) {
    var m = new User()
    m.validate(function (err) {
      should.exist(err)
      done()
    })
  })
  it('can save one ', function (done) {
    const newUser = new User({
      userId: '1234'
    })
    newUser.save()
    .then(() => {
      done()
    })
  })
  it('can find one ', function(done) {
    User.findOne({userId: '1234'}, function (err, doc) {
      should.exist(doc)
      should.not.exist(err)
    })
  })
})