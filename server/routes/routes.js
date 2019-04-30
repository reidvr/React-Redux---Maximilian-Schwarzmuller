const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/getData', async (req, res) => {
    try{
        const data = await db.getData();
        res.json(data)
    }
    catch(err){console.log('err: ', err)}
})

router.post('/postData', async (req, res) => { 
    const receivedData = req.body;

    try{
        //const id = await db.addData(receivedData)
        //const newData = await db.getData(id[0]);
        //res.json(newData)
    }
    catch(err){console.log('err: ', err)}

})

router.put('/updateData', async (req, res) => {
    let updatedData = req.body
    try{
        // await db.updateData(updatedData)
        // const newData = await db.getData(id[0]);
        // res.json(newData)
    }
    catch(err){console.log('err: ', err)}
})

router.delete('/deleteData/:id', async (req, res) => {
    const id = req.params.id
    
    try{
        //await db.deleteData(id);
        //res.sendStatus(200);
    }
    catch(err){console.log('err: ', err)}
});



module.exports = router
