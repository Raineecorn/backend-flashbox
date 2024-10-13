const fetchUser = ({  query }) => {
    return async function post(data) {
      let {id,...info} = await data;
      if(id){
       return query.findUser(id);
      }
      return await query.fetchData({firstName: info.firstname,lastName: info.lastname,email: info.email});
    };
  };
   
   module.exports = fetchUser