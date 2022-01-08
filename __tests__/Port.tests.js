/* globals describe it expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');

describe('Port', () => {
  it('can be instantiated',  () => {
    const port = new Port('Liverpool');
    expect(port).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    const port = new Port('Liverpool');
    expect(port.portName).toBe('Liverpool');
  })
  it('can add ships', () => {
    const port = new Port('Liverpool');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
  it('can remove ships', () => {
    const port = new Port('Liverpool');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });
});