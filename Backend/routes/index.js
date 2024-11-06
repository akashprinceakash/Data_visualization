const express = require('express');
const router = express.Router();

const getdata=require('../Controller/dataControl')

router.get("/",getdata.Getalldata);
module.exports = router;
