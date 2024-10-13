const createUser = ({ makeUsers, query }) => {
    return async function post(info) {
      let datas = await makeUsers(info);
      let data = {
        sendername: datas.getSenderName(),
        receivername: datas.getReceiverName(),
        senderAddress: datas.getSenderAddress(),
        receiverAddress: datas.getReceiverAddress(),
        senderContact: datas.getSenderContact(),
        receiverContact: datas.getReceiverContact(),
        email: datas.getEmail(),
      };
      

      //check and create sender data

      const sender = await query.fetchData({fullname:data.sendername,
         email : data.email, contactNumber: data.senderContact  });

      const receiver = await query.fetchData({fullname:data.receivername,
      email : data.email, contactNumber: data.receiverAddress  });
          
          
          
      //throw an error if the username is exist
      if(validation.length > 0) { throw new Error(`Username is exist, Try new something...`)}
       //execute to create user
      const res = await query.createData({data})
      let message = `Roger, We have a problem.` 
      if(res)  return res
      return message
    };
  };
   
   module.exports = createUser