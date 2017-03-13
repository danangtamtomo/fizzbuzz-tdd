const should = require('chai').should()
const fizzbuzz = require('../fizzbuzz')

describe('Fizzbuzz test: ', function () {
  it('Will return fizz if the number can be divided only by 3', function () {
    fizzbuzz(18).should.equal('fizz')
  })

  it('Will return buzz if the number can be divided only by 5', function () {
    fizzbuzz(10).should.equal('buzz')
  })

  it('Will return fizzbuzz if the number can be divided by 3 then 5', function () {
    fizzbuzz(15).should.equal('fizzbuzz')
  })

  it('Will return the number if it cannot be divided by 3 or 5', function () {
    fizzbuzz(2).should.equal(2)
  })
})
