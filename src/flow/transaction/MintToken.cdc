import PetStore from 0xf8d6e0586b0a20c7

transaction(metadata: {String: String}) {
  let receiverRef: &{PetStore.NFTReceiver}

  let minterRef: &PetStore.NFTMinter

  prepare(account: AuthAccount) {
    self.receiverRef = account.getCapability<&{PetStore.NFTReceiver}>(/public/NFTReceiver)
      .borrow()
      ?? panic("Could not borrow receiver reference")

    self.minterRef = account.borrow<&PetStore.NFTMinter>(from: /storage/NFTMinter)
      ?? panic("Could not borrow minter reference")
  }

  execute {
    let newToken <- self.minterRef.mint(metadata)

    self.receiverRef.deposit(token: <- newToken)
  }
}
