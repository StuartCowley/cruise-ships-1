/* globals describe it expect */
const Port = require('../src/Port.js');

describe('Port', () => {
  describe('with ports and ships', () => {
    let port;
    let ship;
    let titanic;
    let queenMary;

    beforeEach(() => {
      port = new Port('Liverpool');
      ship = jest.fn();
      titanic = jest.fn();
      queenMary = jest.fn();
    });
    it('can be instantiated',  () => {
      expect(port).toBeInstanceOf(Object);
    });
    it('has a name', () => {
      const port = new Port('Liverpool');
      expect(port.portName).toBe('Liverpool');
    });
    it('can add ships', () => {
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });
    it('can remove ships', () => {
      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});