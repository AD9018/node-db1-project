const router = require('express').Router()
const Account = require('./accounts-model')
const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique
} = require("./accounts-middleware")



router.get('/', (req, res, next) => {
  Account.getAll()
   
})

router.get('/:id', (req, res, next) => {
  
})

router.post('/', (req, res, next) => {
  
})

router.put('/:id', (req, res, next) => {
  
});

router.delete('/:id', (req, res, next) => {
  
})



module.exports = router;
