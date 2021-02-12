import {Router} from 'express'

const router = Router()

// FROM SITES

import * as temperaturesCtrl from './../controllers/temperatures.controller'


router.post('/',temperaturesCtrl.addTemperature)

router.get('/',temperaturesCtrl.listTemperatures)

router.put('/:temperatureId',temperaturesCtrl.updateTemperatureById)

router.get('/:temperatureId',temperaturesCtrl.temperatureById)

router.get('/:parameter/:temperatureParameter',temperaturesCtrl.temperatureByParameter)

router.get('/filter/:filter',temperaturesCtrl.listTemperaturesFilter)

router.delete('/:temperatureId',temperaturesCtrl.deleteTemperatureById)

export default router