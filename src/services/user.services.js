import UserDaoMongoDB from '../dao/mongoDB/user.dao.js'
const userDaoMongoDB = new UserDaoMongoDB()

export default class UserService {

  async registerUser(user) {
    try {
      const userRegisted = await userDaoMongoDB.registerUser(user)
      if(!userRegisted) return false
      else return userRegisted
    } catch (error) {
      console.log(error)
    }
  }

  async loginUser(user) {
    try {
      const userLogged = await userDaoMongoDB.loginUser(user)
      if (!userLogged) return false
      else return userLogged
    } catch (error) {
      console.log(error)
    }
  }

}