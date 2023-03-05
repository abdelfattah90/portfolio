import express from 'express'
const router = express.Router()

router.get('/', (req, res) => res.render('pages/index'))
router.get('/projects', (req, res) => res.render('pages/projects'))
router.get('/snippets', (req, res) => res.render('pages/snippets'))
router.get('/blogs', (req, res) => res.render('pages/blogs'))
router.get('/contact', (req, res) => res.render('pages/contact'))
router.get('/*', (req, res) => res.render('pages/404'))

export default router
