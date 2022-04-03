import PetStore from 0xf8d6e0586b0a20c7

transaction(tokenId: UInt64, recipientAddr: Address) {
  let token: @PetStore.NFT

  prepare(account: AuthAccount) {
    let collectionRef = account.borrow<&PetStore.NFTCollection>(from: /storage/NFTCollection)
      ?? panic("Could not borrow owner's collection reference")

    self.token <- collectionRef.withdraw(id: tokenId)
  }

  execute {
    let recipient = getAccount(recipientAddr)

    let receiverRef = recipient.getCapability<&{PetStore.NFTReceiver}>(/public/NFTReceiver)
      .borrow()
      ?? panic("Could not borrow receiver reference")

    receiverRef.deposit(token: <- self.token)

    PetStore.owners[tokenId] = recipientAddr
  }
}
