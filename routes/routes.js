import express from 'express'
const router = express.Router()

router.get('/', (req, res) => res.render('pages/index'))
router.get('/*', (req, res) => res.render('pages/404'))
export default router
