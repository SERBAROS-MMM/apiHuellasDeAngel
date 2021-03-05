import {Router} from 'express'

const router = Router()

// FROM SITES

import * as newsCtrl from './../controllers/news.controller'


router.post('/',newsCtrl.addNew)

router.get('/',newsCtrl.listNews)

router.put('/:newId',newsCtrl.updateNewById)

router.get('/:newId',newsCtrl.newById)

router.get('/filter/:filter',newsCtrl.listaNewsFilter)

router.get('/:parameter/:newParameter',newsCtrl.newByParameter)

router.delete('/:newId',newsCtrl.deleteNewById)

export default router