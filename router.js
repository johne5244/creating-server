const express = require('express')
const router = express.Router();


const {
  getnews,
  getnew,
  postnew,
  patchnew,
  deletenew
} = require('../controllroute')

router.route('/').get(getnews).post(postnew)
router.route('/:id').get(getnew).patch(patchnew).delete(deletenew)


















module.exports = router;