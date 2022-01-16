const Itinerary = require("../src/Itinerary");
const Port = require("../src/Port");

describe('Itinerary', () => {
  let liverpool;
  let newYork;
  let itinerary;

  beforeEach(() => {
    liverpool = new Port('Liverpool');
    newYork = new Port('New York'); 
    itinerary = jest.fn();
  });

  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  })
  it('can have ports', () => {
    itinerary = new Itinerary([liverpool, newYork]);
    expect(itinerary.ports).toEqual([liverpool, newYork]);
  })
});