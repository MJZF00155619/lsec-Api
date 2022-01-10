const router = require('express').Router()
const { create, deleteTopic, getAll } = require('../controllers/TopicController')

router.post('/add', create)
router.delete('/delete', deleteTopic)
router.get('/get', getAll)

module.exports = router