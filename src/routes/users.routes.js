import {Router} from 'express'
const router = Router()

import * as usersCtrl from './../controllers/users.controller'

router.post('/',usersCtrl.addUser)

router.get('/',usersCtrl.listUsers)

router.put('/:userId',usersCtrl.updateUserById)

router.get('/:userId',usersCtrl.userById)

router.delete('/:userId',usersCtrl.deleteUserById)

export default router