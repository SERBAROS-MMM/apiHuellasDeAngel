import * as createServ from '../services/Evaluations/create'
import * as readServ from '../services/Evaluations/read'
import * as updateServ from '../services/Evaluations/update'
import * as deleteServ from '../services/Evaluations/delete'

//CREATE PERSONS
export const addEvaluation = async (req, res) => { 
    try{
        const newEvaluation = req.body
        const response = await createServ.addEvaluation(newEvaluation)
        console.log(response)
        res.status(201).json({status:201,response})
    }catch (e){
        res.status(500).json(e)
    }
}


// READ PERSONS
export const listEvaluations = async (req, res) => {
    try{        
       
            const response = await readServ.listEvaluations()
            res.status(200).json({status:200,response})
             
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const listEvaluationsFilter = async (req, res) => {
    try{        
        const filter=req.params.filter
        
        const response = await readServ.listEvaluationsfiltered(filter)
        res.status(200).json({status:200,response})
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const evaluationById = async (req, res) => {
    try{        
        const idEvaluation = req.params.evaluationId
        const response = await readServ.evaluationById(idEvaluation)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const evaluationByParameter = async (req, res) => {
    try{        
        const parameterEvaluation = req.params.evaluationParameter
        const parameter = req.params.parameter
        const response = await readServ.evaluationByParameter(parameter,parameterEvaluation)
        res.status(200).json({status:200,response})
    }catch (e){
        res.status(500).json(e)
    }
}

//UPDATE PERSONS
export const updateEvaluationById = async (req, res) => {
    try{
        const newEvaluation = req.body
        const idEvaluation = req.params.evaluationId
        const response = await updateServ.updateEvaluationById(idEvaluation,newEvaluation)
        console.log(response)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//DELETE PERSONS
export const deleteEvaluationById = async (req, res) => {
    try{
        const idEvaluation = req.params.evaluationId
        const response = await deleteServ.deleteEvaluationById(idEvaluation)
        console.log(response)
        res.status(204).json()
    }catch (e){
        res.status(500).json(e)
    }
}