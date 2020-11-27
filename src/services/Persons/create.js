import Person from './../../models/Person'

export const addPerson = async (newPersonData) => {
    
        const personNew = await Person.create(newPersonData)
        return personNew        
  
}