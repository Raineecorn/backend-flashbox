const {regesterUser,viewUser,assignTracker}  = require('../../controllers/user/app')

const route = ({router,makeExpressCallback,middlewares,decrypt,encrypt}) => {
    //create User
    router.post('/register',makeExpressCallback(regesterUser))
    //fetch Data
    router.get('/',makeExpressCallback(viewUser))
    //Assign Tracking
    router.post('/tracking/validate-and-assign',makeExpressCallback(assignTracker))
    //remove User
    //router.delete('/remove/:id',makeExpressCallback(removeUser))
    //change Password or User 
    //router.patch('/edit/:id',makeExpressCallback(editUser))

    return router
}

module.exports = route