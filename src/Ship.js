class Ship {
  constructor(currentPort){
    this.currentPort = currentPort;
  }
  setSail() {
    this.currentPort = false;
  }

  dock(port) {
      this.currentPort = port;
  }
};

module.exports = Ship;
