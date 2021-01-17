import Person from './../../models/Person'

export const listPersons  = async () => {
    const listPersons = await Person.find()
    return listPersons        
}

export const personById = async (idPersonData) =>{
    const personById = await Person.findById(idPersonData)
    return personById
}

export const personByParameter = async (parameterData,parameterPersonData) =>{
    const query={}
    query[parameterData]= parameterPersonData
    const personById = await Person.findOne(query)
    return personById
}

export const listPersonsfiltered  = async (FilterData) => {
    const listPersons = await Person.find()

    const listPersonsfiltered=listPersons.filter((item)=>{
        const a=(JSON.stringify(item)
           .toUpperCase()
           .indexOf(FilterData.toUpperCase()) > -1 ? 1 : 0)
       return a > 0
      });

    return listPersonsfiltered        
}