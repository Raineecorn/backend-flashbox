const makeUser = ({}) => {
    return function make({
      sendername,
      receivername,
      senderAddress,
      receiverAddress,
      senderContact,
      receiverContact,
      email,
     } = {}) {
      //email regex validation
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      //validation for empty sendername
      if (!sendername) {
        throw new Error(`sender name must be filled out!`);
      }
      //validation for empty receivername
      if (!receivername) {
        throw new Error(`receiver name must be filled out!`);
      } 
      //validation for empty receiverAddress
      if (!receiverAddress) {
        throw new Error(`receiver Address name must be filled out!`);
      } 
      //validation for empty senderContact
      if (!senderContact) {
        throw new Error(`sender Contact must be filled out!`);
      }
      //validation for empty receiverContact
      if (!receiverContact) {
        throw new Error(`receiver Contact must be filled out!`);
      } 
      //validation for wrong format email 
       if (!emailRegex.test(email)) {
        throw new Error(`invalid email!`);
      }


      //save Data as ObjectFreeze and make it as a function
      return Object.freeze({
        getSenderName:()  => sendername, 
          getReceiverName:()  => receivername, 
          getSenderAddress:()  => senderAddress, 
          getReceiverAddress:()  => receiverAddress, 
          getSenderContact:()  => senderContact, 
          getReceiverContact:()  => receiverContact, 
          getEmail:()  => email, 
      });
    };
  };
  
  module.exports = makeUser;
  