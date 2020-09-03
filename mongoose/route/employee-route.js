const express = require('express');
const router =  express.Router()

const employeeModel = require('../modal/employee');
const { json } = require('body-parser');

router.route('/').get(function(req, res){

   const data =employeeModel.find(function(err,resdata){
    res.json(resdata);
   });
});

router.route('/').post(function(req, res){
    let familobj = new employeeModel(req.body);
    familobj.save()
        .then(business => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(err => {
            res.status(400).send('unable to save data');
        });
});

router.route('/:id').get(function(req, res){
    let id = req.params.id;
    employeeModel.findById(id, function(err, obj){
        res.json(obj);
    });
});

router.route('/:id').put(function(req, res){

    let id = req.params.id;
    employeeModel.findById(id, function(err, obj){
        console.log(JSON.stringify(req.body))
        obj.FName = req.body.FName;
        obj.LName = req.body.LName;
        obj.UName = req.body.UName;

        obj.save(()=>{
            res.json(obj);
        })
    });
});

// delete route
router.route('/:id').delete(function(req, res) {
    employeeModel.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err){
            res.json(err);
        }
        else{
            res.json('Successfully Deleted');
        }
    });
});


module.exports = router;
