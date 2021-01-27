import * as createServ from '../services/Temperatures/create'
import * as readServ from '../services/Temperatures/read'
import * as updateServ from '../services/Temperatures/update'
import * as deleteServ from '../services/Temperatures/delete'

//CREATE PERSONS
export const addTemperature = async (req, res) => { 
    try{
        const newTemperature = req.body
        const response = await createServ.addTemperature(newTemperature)
        console.log(response)
        res.status(201).json({status:201,response})
    }catch (e){
        res.status(500).json(e)
    }
}


// READ PERSONS
export const listTemperatures = async (req, res) => {
    try{        
       
            const response = await readServ.listTemperatures()
            res.status(200).json({status:200,response})
             
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const listTemperaturesFilter = async (req, res) => {
    try{        
        const filter=req.params.filter
        
        const response = await readServ.listTemperaturesfiltered(filter)
        res.status(200).json({status:200,response})
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const temperatureById = async (req, res) => {
    try{        
        const idTemperature = req.params.temperatureId
        const response = await readServ.temperatureById(idTemperature)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const temperatureByParameter = async (req, res) => {
    try{        
        const parameterTemperature = req.params.temperatureParameter
        const parameter = req.params.parameter
        const response = await readServ.temperatureByParameter(parameter,parameterTemperature)
        res.status(200).json({status:200,response})
    }catch (e){
        res.status(500).json(e)
    }
}

//UPDATE PERSONS
export const updateTemperatureById = async (req, res) => {
    try{
        const newTemperature = req.body
        const idTemperature = req.params.temperatureId
        const response = await updateServ.updateTemperatureById(idTemperature,newTemperature)
        console.log(response)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//DELETE PERSONS
export const deleteTemperatureById = async (req, res) => {
    try{
        const idTemperature = req.params.temperatureId
        const response = await deleteServ.deleteTemperatureById(idTemperature)
        console.log(response)
        res.status(204).json()
    }catch (e){
        res.status(500).json(e)
    }
}