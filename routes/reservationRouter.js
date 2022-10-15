const express = require('express');
const reservationController = require('../controllers/reservationController');

const router = express.Router();

router.post('/', reservationController.createReservation);

module.exports = router;
