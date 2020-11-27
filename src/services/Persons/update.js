import Person from './../../models/Person'

export const updatePersonById = async (idPersonData,newPersonData) =>{
    const personUptatedById = await Person.findByIdAndUpdate(idPersonData,newPersonData,{new :true})
    return personUptatedById
}