const axios = require('axios')
const jwt_decode = require('jwt-decode')
const db = require('../models/db')

const ALL_ROLES = {
  STUDENT: 'STUDENT',
  ASISTENT: 'ASISTENT',
  PROFESOR: 'PROFESOR',
  ADMIN: 'ADMIN',
  STUDENTSKA_SLUZBA: 'STUDENTSKA_SLUZBA',
}

module.exports = {
  authenticate: function(availableRoles) {
    return async function(req, res, next){
      const authHeader = req.headers.authorization || req.headers.Authorization
      const idHeader = req.headers.user__id
      try{
        await new axios(
          {
            method: 'GET',
            url: 'https://si2019romeo.herokuapp.com/users/validate',
            headers: {
              'Authorization': authHeader
            }
          }
        )
  
        const token = authHeader.split('Bearer ')[1]
        const username = jwt_decode(token).sub
        
        const korisnik = await db.korisnik.findOne({
          where: {
            username,
            id: idHeader
          }
        })

        if(!korisnik){
          return res.status(403).send({ message: 'Please do not hack' })
        }
        const ulogaResponse = await new axios(
          {
            method: 'GET',
            url: 'https://si2019oscar.herokuapp.com/pretragaId/' + idHeader + '/dajUlogu'
          }
        )
        if(availableRoles.indexOf(ulogaResponse.data) > -1){
          req.uloga = ulogaResponse.data
          next()
        }else{
          return res.status(405).send({ message: 'Nemate pristupa' })
        }
      }catch(e){
        console.log("Error je:", e)
        return res.status(403).send(e)
      }
    }
  },
  ROLES: ALL_ROLES
}