const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: "api/blog/signup",
    };
    res.status(200).send(result);
});

module.exports = router;