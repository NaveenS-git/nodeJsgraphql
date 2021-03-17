  
const express = require ('express');
const router = express.Router();
const User = require('../models/user')

// update a user in the db
router.post('/update/:id', function(req, res){
    const id = req.params.id;
    const upname = req.body.name;
    const uptech = req.body.technology;
    User.findByPk(id).then(data => {
        data.name = upname;
        data.technology = uptech;
        data.save();
        res.json(data)
    }).then(result => {
        res.send('success')
    }).catch(err =>{
        res.send(err)
    })
});


// get the list of users from the db
router.get('/all', function(req,res,next) {
    try{
           User.findAll().then(data =>{
               res.json(data)
           })
    }catch(err){
        res.send('No Data Found')
    }
});

// get the user from given id from the db
router.get('/:id', async(req,res) => {
    try{
           const alien = await User.findByPk(req.params.id)
           res.json(alien)
    }catch(err){
        res.send('User Not Found')
    }
})

// add a new user to the db
router.post('/post', async(req,res) => {
    const data = new User({
        name: req.body.name,
        technology: req.body.technology
    })
    try{
        const a1 =  await data.save() 
        res.json(a1)
    }catch(err){
        res.send('Invalid data')
    }
})

// delete a user from the db
router.post('/delete/:id', function(req,res,next){
    const id = req.params.id;
    User.findByPk(id).then(data => {
        return data.destroy();
    })
    .then(result => {
        res.send(id+' '+'deleted Successfully')
    })
    .catch(err => {
        res.send(err);
    })

})

module.exports = router;