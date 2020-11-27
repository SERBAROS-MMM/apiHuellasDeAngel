import Person from './../../models/Person'

export const deletePersonById = async (idPersonData) =>{
    const personDeletedById = await Person.findByIdAndDelete(idPersonData)
    return personDeletedById
}