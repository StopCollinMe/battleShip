class Ship{
    constructor(size){
        if(size > 1 && size < 6){
            this.size = size;
            this.hits = 0;

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

        //Connect these to images of direction?
        if(grid <= 100 && grid > 0){
            if(direction == horizontalLeft){

            }
            else if(direction == 'horizontal right'){
                
            }
            else if(direction == 'vertical left'){
                
            }
            else if(direction == 'vertical right'){
                
            }
        }
        else{
            return null;
        }
    }

    receiveAttack(){

    }



    allSunk(){

    }
}

class Player{

}

const ship1 = new Ship(5);
ship1.length();

module.exports = {Ship};