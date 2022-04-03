import PetStore from 0xf8d6e0586b0a20c7

pub fun main(id: UInt64): {String: String} {
  let ownerAddr = PetStore.owners[id]!

  let ownerAcct = getAccount(ownerAddr)

  let receiverRef = ownerAcct.getCapability<&{PetStore.NFTReceiver}>(/public/NFTReceiver)
    .borrow()
    ?? panic("Could not borrow receiver reference")

  return receiverRef.getTokenMetadata(id: id)
}
