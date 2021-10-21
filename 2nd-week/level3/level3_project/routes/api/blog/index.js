const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: "blog home",
    };
    res.status(200).send(result);
});

router.use("/post", require("./post"));

module.exports = router;
