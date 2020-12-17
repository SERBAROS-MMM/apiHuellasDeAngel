import {Router} from 'express'
import {authJwt} from '../middlewares'

const router = Router()

import * as authCtrl from './../controllers/auth.controller'

router.post('/login',authCtrl.loginUser)
router.post('/autologin',authJwt.verifyToken,authCtrl.autologinUser)

export default router