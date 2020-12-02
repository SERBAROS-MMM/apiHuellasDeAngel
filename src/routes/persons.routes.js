import {Router} from 'express'
import {authJwt} from '../middlewares'

const router = Router()


import * as personsCtrl from './../controllers/persons.controller'

router.post('/',authJwt.verifyToken,personsCtrl.addPerson)

router.get('/',personsCtrl.listPersons)

router.put('/:personId',personsCtrl.updatePersonById)

router.get('/:personId',personsCtrl.personById)

router.delete('/:personId',personsCtrl.deletePersonById)


export default router