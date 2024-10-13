const Query = ({ connections, TrackingIdentity, Op, buildCondition }) => {
    return Object.freeze({
        findTracker,addTracker
    });
     //find Tracker
    async function findTracker(id) {
      try {
        const result = await TrackingIdentity.findAll({
            where: {
              trackingId: id
            }
          });
        return result;
      } catch (error) {
        console.error("Error on fetching Tracker: ", error.message);
        throw new Error("Failed on fetching Tracker!")
      }
    }
     //add Tracker
     async function addTracker(trackingData) {
      try {
        const result = await TrackingIdentity.create(trackingData);
        return result;
      } catch (error) {
        console.error("Error on adding Tracker: ", error.message);
        throw new Error("Failed on adding Tracker!")
      }
    }
  };
  
  module.exports = Query;
  