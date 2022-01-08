class Ship {
  constructor(currentPort){
    this.currentPort = currentPort;
  }
  setSail() {
    this.currentPort = false;
  }
};

module.exports = Ship;
