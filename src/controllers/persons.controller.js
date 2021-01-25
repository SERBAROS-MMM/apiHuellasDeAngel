import * as createServ from './../services/Persons/create'
import * as readServ from './../services/Persons/read'
import * as updateServ from './../services/Persons/update'
import * as deleteServ from './../services/Persons/delete'

//CREATE PERSONS
export const addPerson = async (req, res) => { 
    try{
        const newPerson = req.body
        const response = await createServ.addPerson(newPerson)
        console.log(response)
        res.status(201).json({status:201,response})
    }catch (e){
        res.status(500).json(e)
    }
}


// READ PERSONS
export const listPersons = async (req, res) => {
    try{        
       
            const response = await readServ.listPersons()
            res.status(200).json({status:200,response})
             
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const countPersons = async (req, res) => {
    try{        
            const query = req.body
            const response = await readServ.countPersons(query)
            res.status(200).json({status:200,response})
             
        
    }catch (e){
        res.status(500).json(e)
    }
}


export const listPersonsFilter = async (req, res) => {
    try{        
        const filter=req.params.filter
        
        const response = await readServ.listPersonsfiltered(filter)
        res.status(200).json({status:200,response})
        
    }catch (e){
        res.status(500).json(e)
    }
}

export const personById = async (req, res) => {
    try{        
        const idPerson = req.params.personId
        const response = await readServ.personById(idPerson)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const personByParameter = async (req, res) => {
    try{        
        const parameterPerson = req.params.personParameter
        const parameter = req.params.parameter
        const response = await readServ.personByParameter(parameter,parameterPerson)
        res.status(200).json({status:200,response})
    }catch (e){
        res.status(500).json(e)
    }
}

//UPDATE PERSONS
export const updatePersonById = async (req, res) => {
    try{
        const newPerson = req.body
        const idPerson = req.params.personId
        const response = await updateServ.updatePersonById(idPerson,newPerson)
        console.log(response)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//DELETE PERSONS
export const deletePersonById = async (req, res) => {
    try{
        const idPerson = req.params.personId
        const response = await deleteServ.deletePersonById(idPerson)
        console.log(response)
        res.status(204).json()
    }catch (e){
        res.status(500).json(e)
    }
}