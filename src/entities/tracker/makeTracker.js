const makeTracker = ({}) => {
    return function make({ trackingId, userId} = {}) {
    
      //validation for empty trackingId
      if (!trackingId) {
        throw new Error(`tracking Id must be filled out!`);
      }
      //validation for empty userId
      if (!userId) {
        throw new Error(`choose user!`);
      }
      //save Data as ObjectFreeze and make it as a function
      return Object.freeze({
        getTrackingId: () => trackingId,
        getUserId: () => userId,
      });
    };
  };
  
  module.exports = makeUser;
  