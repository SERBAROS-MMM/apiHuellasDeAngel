import {Router} from 'express'
import {authJwt} from '../middlewares'

const router = Router()

import * as personsCtrl from './../controllers/persons.controller'

router.post('/',personsCtrl.addPerson)

router.get('/',personsCtrl.listPersons)

router.get('/filter/:filter',personsCtrl.listPersonsFilter)

router.put('/:personId',personsCtrl.updatePersonById)

router.get('/:personId',personsCtrl.personById)

router.get('/:parameter/:personParameter',personsCtrl.personByParameter)

router.delete('/:personId',personsCtrl.deletePersonById)


export default router