const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', getBlog, (req, res) => {
    res.json(res.blog)
})

router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        post: req.body.post
    })
    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.patch('/:id', getBlog, async (req, res) => {
    if (req.body.title != null) {
        res.blog.title = req.body.title
    }
    if (req.body.post != null) {
        res.blog.post = req.body.post
    }
    try {
        const updatedBlog = await res.blog.save()
        res.json(updatedBlog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/:id', getBlog, async (req, res) => {
    try {
        await res.blog.deleteOne()
        res.json({message: 'Deleted Blog'})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getBlog(req, res, next) {
    let blog
    try {
        blog = await Blog.findById(req.params.id)
        if (blog == null){
            return res.status(404).json({message: "Cannot find blog"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

    res.blog = blog
    next()
}

module.exports = router