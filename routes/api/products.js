const express = require('express');
const router = express.Router();
const {ctrlWrapper } = require('../../middlewares');
const { products: ctrl } = require('../../controllers');
const { tryCatchWrapper } = require('../../helpers');
const { googleAuth, googleRedirect } = require('../../controllers/users');

router.get('/', ctrlWrapper(ctrl.getAllInfo));
router.post('/', ctrlWrapper(ctrl.addProduct));
// router.delete('/:operationId', auth, ctrlWrapper(ctrl.removeOperation));

router.get('/google', tryCatchWrapper(googleAuth));
router.get('/google-redirect', tryCatchWrapper(googleRedirect));

module.exports = router;
