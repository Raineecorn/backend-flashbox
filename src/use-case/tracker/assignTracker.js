const assign = ({userQuery,trackingQuery,makeTracker}) => {
    return async function post(info) {
      await makeTracker(info);
      const tracker = {
        trackingId: info.trackingId(),
        userId:info.userId(),
      }

      const validation = await userQuery.findUser(info.userId);
      
      if(validation.length == 0) { throw new Error(`Error finding User...`)}
       
      //execute to create user
      const findTracker = await trackingQuery.findTracker(info.trackingId);
      
      if(findTracker.length > 0) throw new Error("Inputed Tracker Exist");
      
      const addTracker = await trackingQuery.addTracker(tracker);
      if(addTracker.length > 0){
        return "Tracker already Added";
      }throw new Error("Error on adding Tracker!");
    };
  };
   
   module.exports = assign