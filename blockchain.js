const Block = require('./block')

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()]
        this.difficulity = 4
    }
    createGenesisBlock(){
        const genesisDate = '24/06/1991'
        return new Block('Genesis Block',0,genesisDate,'0')
    }

    getLastBlock(){
        return this.chain[this.chain.length-1]
    }
    
    addNewBlock(newBlock){
        newBlock.previousHash = this.getLastBlock().hash
        newBlock.index = this.getLastBlock().index +1
        newBlock.hash = newBlock.calculateHash()
        newBlock.mineBlock(this.difficulity)
        this.chain.push(newBlock)
    }
    isChainValid(){
        const chain = this.chain
        for(let i =0 ; i<chain.length ; i++){
            if(chain[i].hash !== chain[i].calculateHash()){
                console.log(`Block ${i} has been corrupted`)
                return false
            }
            if(i> 0  && chain[i].previousHash !== chain[i-1].hash){
                console.log(`Block ${i-1} has been corrupted`)
                return false
            }
    }
    console.log("Chain is valid")
    return true

}}

let blockToAdd = 5
const kotak = new Blockchain()

for(i = 0 ; i<blockToAdd;i++){
    kotak.addNewBlock(new Block({sender : 'joshua' , receiver : "autawi" , message : `Block ${kotak.chain.length} has been added`}))
}
kotak.chain.forEach(block=>{
    console.log(block)
 
})

