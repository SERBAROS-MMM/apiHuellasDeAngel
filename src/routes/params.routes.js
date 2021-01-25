import {Router} from 'express'

const router = Router()

// FROM SITES

import * as fromSitesCtrl from './../controllers/fromSites.controller'

router.post('/fromSite/',fromSitesCtrl.addFromSite)

router.get('/fromSite/',fromSitesCtrl.listFromSites)

router.put('/fromSite/:fromSiteId',fromSitesCtrl.updateFromSiteById)

router.get('/fromSite/:fromSiteId',fromSitesCtrl.fromSiteById)

router.get('/fromSite/:parameter/:fromSiteParameter',fromSitesCtrl.fromSiteByParameter)

router.get('/fromSite/filter/:filter',fromSitesCtrl.listFromSitesFilter)

router.delete('/fromSite/:fromSiteId',fromSitesCtrl.deleteFromSiteById)


export default router