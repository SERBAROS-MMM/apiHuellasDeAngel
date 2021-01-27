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


// EVALUATIONS

import * as evaluationsCtrl from './../controllers/evaluations.controller'

router.post('/evaluations/',evaluationsCtrl.addEvaluation)

router.get('/evaluations/',evaluationsCtrl.listEvaluations)

router.put('/evaluations/:evaluationId',evaluationsCtrl.updateEvaluationById)

router.get('/evaluations/:evaluationId',evaluationsCtrl.evaluationById)

router.get('/evaluations/:parameter/:evaluationParameter',evaluationsCtrl.evaluationByParameter)

router.get('/evaluations/filter/:filter',evaluationsCtrl.listEvaluationsFilter)

router.delete('/evaluations/:evaluationId',evaluationsCtrl.deleteEvaluationById)


export default router