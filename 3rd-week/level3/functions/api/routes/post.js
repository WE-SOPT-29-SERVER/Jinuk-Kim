const express = require('express');
const router = express.Router();
const util = require('../../lib/util');
const statusCode = require('../../constants/statusCode');
const responseMessage = require('../../constants/responseMessage');
const posts = require('../../dbMockup/post');

router.get("", (req, res) => {

    if(posts.length === 0){
        return res.status(statusCode.NOT_FOUND).send(
            util.fail(statusCode.NOT_FOUND, responseMessage.NO_POST)
        );
    }

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.READ_ALL_POSTS_SUCCESS,
            posts,
        ),
    );

});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.filter(post => post.id === Number(id))[0];
    if(!post){
        return res.status(statusCode.NOT_FOUND).send(
            util.fail(statusCode.NOT_FOUND, responseMessage.NO_POST)
        );
    }
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.READ_ONE_POST_SUCCESS,
            post,
        )
    );
});


router.post("", (req, res) => {
    const { subject, content } = req.body;
    if(!subject || !content){
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
        );
    }
    
    const lastPost = posts[posts.length - 1];
    const post = {
        id: lastPost.id + 1,
        subject,
        content,
    }
    posts.push(post);

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.ADD_ONE_POST_SUCCESS,
            post,
        )
    );

});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { subject, content } = req.body;
    const post = posts.filter(post => post.id === Number(id))[0];
    
    if(!subject || !content){
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
        );
    }
    
    if(!post){
        return res.status(statusCode.NOT_FOUND).send(
            util.fail(statusCode.NOT_FOUND, responseMessage.NO_POST)
        );
    }
    
    const idx = posts.indexOf(post)
    posts.splice(idx, 1);
    post.subject = subject;
    post.content = content;
    posts.push(post);

    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.DELETE_ONE_POST_SUCCESS,
            post,
        )
    );
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE)
        );
    }
    
    const post = posts.filter(post => post.id === Number(id))[0];
    if(!post){
        return res.status(statusCode.NOT_FOUND).send(
            util.fail(statusCode.NOT_FOUND, responseMessage.NO_POST)
        );
    }
    
    const idx = posts.indexOf(post)
    posts.splice(idx, 1);
    
    res.status(statusCode.OK).send(
        util.success(
            statusCode.OK,
            responseMessage.DELETE_ONE_POST_SUCCESS,
            post,
        )
    );
});


module.exports = router;

