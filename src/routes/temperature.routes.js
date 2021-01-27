import {Router} from 'express'

const router = Router()

// FROM SITES

import * as temperaturesCtrl from './../controllers/temperatures.controller'

router.post('/temperature/',temperaturesCtrl.addTemperature)

router.get('/temperature/',temperaturesCtrl.listTemperatures)

router.put('/temperature/:temperatureId',temperaturesCtrl.updateTemperatureById)

router.get('/temperature/:temperatureId',temperaturesCtrl.temperatureById)

router.get('/temperature/:parameter/:temperatureParameter',temperaturesCtrl.temperatureByParameter)

router.get('/temperature/filter/:filter',temperaturesCtrl.listTemperaturesFilter)

router.delete('/temperature/:temperatureId',temperaturesCtrl.deleteTemperatureById)

export default router