class Port {
  constructor(portName){
    this.portName = portName;
    this.ships = [];
  };
  addShip(ship) {
    this.ships.push(ship);
  };
  removeShip(ship) {
    this.ships.pop(ship);
  };
};

module.exports = Port;