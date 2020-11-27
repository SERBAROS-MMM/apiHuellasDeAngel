import Person from './../../models/Person'

export const listPersons  = async () => {
    const listPersons = await Person.find()
    return listPersons        
}

export const personById = async (idPersonData) =>{
    const personById = await Person.findById(idPersonData)
    return personById
}