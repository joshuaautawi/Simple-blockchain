const Block = require('./block')

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()]
    }
    createGenesisBlock(){
        const genesisDate = '24/06/1991'
        return new Block('Genesis Block',0,genesisDate)
    }

    getLastBlock(){
        return this.chain[this.chain.length-1]
    }
    
    addNewBlock(newBlock){
        newBlock.index = this.getLastBlock().index +1
        newBlock.hash = newBlock.calculateHash()
        this.chain.push(newBlock)
    }

}

let blockToAdd = 5
const kotak = new Blockchain()

for(i = 0 ; i<blockToAdd;i++){
    kotak.addNewBlock(new Block({sender : 'joshua' , receiver : "autawi" , message : `Block ${kotak.chain.length} has been added`}))
}
kotak.chain.forEach(block=>{
    console.log(block)
})