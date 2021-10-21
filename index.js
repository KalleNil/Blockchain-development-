const hashFunction = (data) =>{
    return data + '*';
  }
  
  class Block{
    constructor(data, hash, lastHash){
      this.data = data;
      this.hash = hash;
      this.lastHash = lastHash;
    }
  
  }
  
  class Blockchain{
    constructor(){
  
      const genesisBlock = new Block('gen-data', 'gen-hash', 'gen-lastHash');
      this.chain = [genesisBlock];
    }
    addBlock(data){
      const lastHash = this.chain[this.chain.length-1].hash;
  
      const hash = hashFunction(data + lastHash);
  
      const block = new Block(data, hash, lastHash);
  
      this.chain.push(block);
  
    }
  }
  
  const fooBlockchain = new Blockchain();
  fooBlockchain.addBlock('one');
  fooBlockchain.addBlock('two');
  fooBlockchain.addBlock('three');
  fooBlockchain.addBlock('four');
  fooBlockchain.addBlock('five');
  fooBlockchain.addBlock('six');
  fooBlockchain.addBlock('seven');
  fooBlockchain.addBlock('eight');
  
  console.log(fooBlockchain);