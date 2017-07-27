const User = require('../models/user');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

	router.post('/newBlog', (req, res) => {
		if (!req.body.title) {
			res.json({success: false, message: 'Blog title is required'})
		} else {
			if (!req.body.body) {
				res.json({success: false, message: 'Blog body is required'})
			} else {
				if (!req.body.createdBy) {
					res.json({success: false, message: 'Blog creator is required'})
				} else {
					const blog = new Blog({
					title: req.body.title,
					body: req.body.body,
					createdBy: req.body.createdBy,
					createdAt: req.body.createdAt,
				});
					blog.save((err) => {
						if (err) {
							if (err.errors) {
								if (err.errors.title) {
									res.json({success: false, message: err.errors.title.message })
								} else {
									if (err.errors.body) {
										res.json({success: false, message: err.errors.body.message })
									} else {
										res.json({success: false, message: err.errmsg })
									}
								}
							} else {
								res.json({success: false, message: err})
							}	
						} else {
							res.json({success: true, message: 'Blog saved'})
						}
					})
				}
			}
		}
	})

	router.get('/allBlogs', (req, res) => {
		Blog.find({}, (err, blogs) => {
			if (err) {
				res.json({success: false, message: err})
			} else {
				if (!blogs) {
					res.json({success: false, message: 'No blogs found'})
				} else {
					res.json({success: true, blogs: blogs })
				}
			}
		}).sort({ '_id': -1});    // Newest post goes top
	})

	router.get('/singleBlog/:id', (req, res) => {
		if (!req.params.id) {
			res.json({success: false, message: 'No blog ID provided'})
		} else {
			Blog.findOne({_id: req.params.id}, (err, blog) => {
				if (err) {
					res.json({success: false, message: 'Not a valid blog ID'})
				} else {
					if (!blog) {
						res.json({success: false, message: 'Blog not found'})
					} else {
						res.json({success: true, blog: blog})
					}
				}
			})			
		}
	})

	return router;
};

					// likes: req.body.likes,
					// likedBy: req.body.likedBy,
					// dislikes: req.body.dislikes,
					// dislikedBy: req.body.dislikedBy,