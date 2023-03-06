import express from 'express'
const router = express.Router()

router.get('/', (req, res) => res.render('pages/index'))
router.get('/works', (req, res) => res.render('pages/works'))
router.get('/about', (req, res) => res.render('pages/about'))
router.get('/snippets', (req, res) => res.render('pages/snippets'))
router.get('/contact', (req, res) => res.render('pages/contact'))
router.get('/thanks', (req, res) => res.render('pages/thanks'))
router.get('/*', (req, res) => res.render('pages/404'))

export default router
