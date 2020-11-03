const router = require('express').Router()
const Accounts = require('./accounts-model')
const restricted = require('../auth/restricted-middleware')

router.get('/', restricted ,(req,res)=>{
    Accounts.findBy({department: req.jwt.department})
    .then(users => {
        res.status(200).json({data: users})
    })
})







module.exports = router; 