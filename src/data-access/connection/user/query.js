const Query = ({ connections, User, Op, buildCondition }) => {
  return Object.freeze({
    fetchData, createData, findUser
  });
  //add USERS
  async function createData({ data }) {
    try {
      const result = await User.create({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password
      });
      return result;
    } catch (error) {
      console.log("Error on Creating User: {}", error.message);
      throw new Error(" Error on fetching Data!")
    }
  }

  //fetch Users
  async function fetchData({ firstName, lastName, email }) {
    try {
      const condition = { firstName, lastName, email };
        if (condition.length == 0){
          return [];
        }
      const result = await User.findAll({
        where: {
          [Op.or]:  await buildCondition.opConditions(condition)
        }
      });

      return result;
    } catch (error) {
      console.error("Error on fetching Data: ", error.message);
      throw new Error("Failed on fetching User!")
    }
  }
  //find User
  async function findUser(id) {
    try {
      const result = await User.findByPk(id);
      return result;
    } catch (error) {
      console.error("Error on fetching User: ", error.message);
      throw new Error("Failed on fetching User!")
    }
  }
};

module.exports = Query;
