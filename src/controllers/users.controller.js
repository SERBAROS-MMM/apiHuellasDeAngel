import * as createServ from './../services/Users/create'
import * as readServ from './../services/Users/read'
import * as updateServ from './../services/Users/update'
import * as deleteServ from './../services/Users/delete'

//CREATE USER
export const addUser = async (req, res) => { 
    try{
        const newUser = req.body
        const response = await createServ.addUser(newUser)
        console.log(response)
        res.status(201).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}


// READ USER
export const listUsers = async (req, res) => {
    try{        
        const response = await readServ.listUsers()
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

export const userById = async (req, res) => {
    try{        
        const idUser = req.params.userId
        const response = await readServ.userById(idUser)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//UPDATE USER
export const updateUserById = async (req, res) => {
    try{
        const newUser = req.body
        const idUser = req.params.userId
        const response = await updateServ.updateUserById(idUser,newUser)
        console.log(response)
        res.status(200).json(response)
    }catch (e){
        res.status(500).json(e)
    }
}

//DELETE USER
export const deleteUserById = async (req, res) => {
    try{
        const idUser = req.params.userId
        const response = await deleteServ.deleteUserById(idUser)
        console.log(response)
        res.status(204).json()
    }catch (e){
        res.status(500).json(e)
    }
}