import PetStore from 0xf8d6e0586b0a20c7

pub fun main(id: UInt64): Address {
  let ownerAddr = PetStore.owners[id]!
  return ownerAddr
}
