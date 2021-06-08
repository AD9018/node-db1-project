const db = require('../../data/db-config')

function getAll(){
  return db('accounts')
}

function getById(id) {
  return db('accounts').where('id', id).first()
}

 async function create({name,budget}) {
   const [id] = await db('accounts')
   .insert({name,budget})
   return getById(id)
 }

function updateById(id,{name,budget}){
  return db('posts')
  .where('id', id)
  .update({name,budget})
  .then(() => {
    return getById(id)
  })
}

async function deleteById(id){
const toBeDeleted = await getById(id)
await db('accounts')
.where({id})
.del()
return toBeDeleted
}

function getByName(name){
  return db('accounts').where({name}).first()
}


module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
