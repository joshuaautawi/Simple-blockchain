// In a block there have a HEADER :  index ( int ) , BODY : Data (Object) , timestamp (date) , hash (sha256)
const { SHA256 } = require('crypto-js') // npm install crypto-js

class Block{
    constructor(data , index,previousHash , timestamp= String(new Date)){
        this.data = data
        this.index = index
        this.timestamp = timestamp
        this.hash = this.calculateHash()
        this.previousHash = previousHash
        this.nonce = 0

    }

    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty +1).join("0")){
            this.nonce ++
            this.hash = this.calculateHash()
        }
        console.log(`Block ${this.index +1} mined  : ${this.hash}`)
    }
    calculateHash(){
        return SHA256(JSON.stringify(this.data)+this.index +this.timestamp+this.previousHash+this.nonce).toString()
    }

}
module.exports = Block