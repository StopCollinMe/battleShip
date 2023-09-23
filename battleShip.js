class Ship{
    constructor(size){
        if(size > 1 && size < 6){
            this.size = size;
            this.hits = 0;
            this.positions = [];

        }else{
           throw new Error('Size must be between 2 and 5');
        }
    }
    length(){
        console.log(this.size);
        return this.size;
    }

    hit(){
        this.hits++;
        return this.hits;
    }

    isSunk(){
        return this.hits === this.size;
    }
}

class Gameboard{
    constructor(){
        this.ships = [];
    }
    createGameBoard(){
        let gameBoard = [];
        for(let x = 0; x < 10; x++){
            let row = [];
            for(let y = 0; y < 10; y++){
                row.push(null);
            }
            gameBoard.push(row);
        }
        return gameBoard;
    }
    //Link UI ship to size
    placeShip(size,place,direction){
        const board = this.createGameBoard();
        const ship = new Ship(size);
        let grid = place;
        let shipPlacement = [[grid]];
        shipPlacement.forEach(position =>{
            ship.positions.push(position);
        });
        //Connect these to images of direction?
        if(grid <= 100 && grid > 0){
            if(direction == 'horizontal left'){
                if(grid % 10 < size){
                    for(let i = ship.length(); i > 0; i--){
                        grid--;
                        shipPlacement.push(grid);
                    }
                }
            }
            else if(direction == 'horizontal right'){
                if(grid % 10 > (10 - size)){
                    for(let i = 0; i < ship.length(); i++){
                        grid++;
                        shipPlacement.push(grid);
                    }
                }
            }
            else if(direction == 'vertical up'){
                if(grid <= 10 * (size - 1)) return false;
                    for(let i = ship.length(); i > 0; i--){
                        grid -= 10;
                        shipPlacement.push(grid);
                }
            }
            else if(direction == 'vertical down'){
                if(grid > 10 * (10 - size+1)) return false;
                    for(let i = 0; i < ship.length(); i++){
                        grid += 10;
                        shipPlacement.push(grid);
                }
            }
            this.ships.push(ship);
            return shipPlacement;
        }
        else{
            return null;
        }
    }

    receiveAttack(a,b){
        let attacks = []
        let misses = [];
        let attack = a*b;
        attacks.push(attack);

        let hit = false;
        this.ships.forEach(ship =>{
            if(ship.positions.includes(attacks[0])){
                ship.hit();
                hit = true;
            }
        });

        if(!hit){
            misses.push(attack[0]);
        }
    }

    allSunk(){
        for(let i = 0; i < this.ships.length();i++){
            if(!this.ships[i].isSunk()){
                return false;
            }
            else{
                return true;
            }
        }
    }
}

class Player{
    constructor(turn){
        this.turn = turn;
        this.player1 = false;
        this.moves = [];

        if(this.turn == 'player 1'){
            this.player1 = true;
        }
    }
    computerTurn(){
        const min = 1;
        const max = 100;

        if(this.player1 == false){
            let random;
            do{
                random = Math.floor(Math.random() * (max - min + 1)) + min;
            }while(this.moves.includes(random));
            console.log(random);
            this.moves.push(random);
            return random;
        }
    }
}

const ship1 = new Ship(5);
ship1.length();

module.exports = {Ship, Gameboard};