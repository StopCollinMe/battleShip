const {Ship} = require('./battleShip');

test('test battleship length', ()=>{
    const ship1 = new Ship(5);
    expect(ship1.length()).toBe(5);
});

test('test battleship hit', () =>{
    const ship1 = new Ship(5);
    expect(ship1.hit()).toBe(1);
});

test('test battleship isSink', () =>{
    const ship1 = new Ship(5);
    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship1.hit();
    ship1.hit();
    
    expect(ship1.isSunk()).toBe(true);
});

