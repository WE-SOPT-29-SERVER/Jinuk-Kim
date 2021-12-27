const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: "api home",
    };
    res.status(200).send(result);
});

router.use("/blog", require("./blog"));

module.exports = router;
