/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Liverpool');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });
  it('gets added to port on instantiation', () =>{
    const liverpool = new Port('Liverpool');
    const itinerary = new Itinerary([liverpool]);
    const ship = new Ship(itinerary);

    expect(liverpool.ships).toContain(ship);
  });
  it('has a starting port', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const dover = new Port('Dover');
    const newYork = new Port('New York');
    const itinerary = new Itinerary([dover, newYork]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(dover.ships).not.toContain(ship);
  });
  it('can dock at different ports', () => {
    const liverpool = new Port('Liverpool');
    const newYork = new Port('New York');
    const itinerary = new Itinerary([liverpool, newYork]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(newYork);
    expect(newYork.ships).toContain(ship);
  });
  it('cannot sail further than its itinerary', () => {
    const liverpool = new Port('Liverpool');
    const newYork = new Port('New York');
    const itinerary = new Itinerary([liverpool, newYork]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinterary reached');
  });
});
