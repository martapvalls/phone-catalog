const { Router } = require('express');
const router = Router();
const phones = require('../phones.json');
console.log(phones)

router.get('/phones', (req, res) => {
    try{
        res.json(phones)
    }catch(error){
        const { message } = error
        if(res.status !== 200) return res.status(400).json({ message })
    }
})

module.exports = router;