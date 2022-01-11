/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
  describe('with ports and an itinerary', () => {
    let liverpool;
    let newYork;
    let itinerary;
    let ship;

    beforeEach(() => {
      liverpool = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Liverpool',
        ships: []
      };
      newYork = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'New York',
        ships: []
      };
      itinerary = {
        ports: [liverpool, newYork]
      };
      ship = new Ship(itinerary);
    });
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('gets added to port on instantiation', () =>{
    expect(liverpool.addShip).toHaveBeenCalledWith(ship);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(liverpool);
  });
  it('can set sail', () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
  });
  it('can dock at different ports', () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(newYork);
    expect(newYork.addShip).toHaveBeenCalledWith(ship);
  });
  it('cannot sail further than its itinerary', () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinterary reached');
  });
  });
});
