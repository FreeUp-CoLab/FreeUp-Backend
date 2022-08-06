const Posts = require('../models/postModel');

async function getAllPosts(req, res) {
    try {
        const data = await Posts.getAllPostsFromDB();
        return res.status(200).json({
            data
        });
    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    }
}

async function getAllPostsForAUser(req, res) {
    const user_id = req.params.user_id;
    if (!user_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Posts.getAllPostsForAUserFromDB(user_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function getSinglePost(req, res) {
    const post_id = req.params.post_id;
    if (!post_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Posts.getSinglePostFromDB(post_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

async function createNewPost(req, res) {
    const { user_id, title, description, image, location } = req.body;
    const postData = {
        user_id,
        title,
        description,
        image,
        location
    }
    if (!postData) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Posts.createNewPostDB(postData)
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }

}

async function deletePost(req, res) {
    const post_id = req.params.post_id;
    if (!post_id) {
        return res.status(404).json({
            message: "NO DATA PROVIDED",
        });
    }
    try {
        const data = await Posts.deletePostFromDB(post_id);
        return res.status(200).json({
            data
        })
    } catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
}

module.exports = {
    getAllPosts,
    getAllPostsForAUser,
    getSinglePost,
    createNewPost,
    deletePost
}
