/* globals describe it expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Port.js')

describe('Port', () => {
  it('can be instantiated',  () => {
    const port = new Port('Liverpool');
    expect(port).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    const port = new Port('Liverpool');
    expect(port.portName).toBe('Liverpool');
  })
})