/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let liverpool;
    let newYork;
    let itinerary;
    let ship;

    beforeEach(() => {
      liverpool = new Port('Liverpool');
      newYork = new Port('New York');
      itinerary = new Itinerary([liverpool, newYork]);
      ship = new Ship(itinerary);
    });
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('gets added to port on instantiation', () =>{
    expect(liverpool.ships).toContain(ship);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(liverpool);
  });
  it('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(liverpool.ships).not.toContain(ship);
  });
  it('can dock at different ports', () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(newYork);
    expect(newYork.ships).toContain(ship);
  });
  it('cannot sail further than its itinerary', () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinterary reached');
  });
  });
});
