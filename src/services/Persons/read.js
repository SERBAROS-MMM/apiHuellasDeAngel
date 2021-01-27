import Person from './../../models/Person'

export const listPersons  = async () => {
    const listPersons = await Person.find().populate({path: "fromSite",select:'name'})
    return listPersons        
}

export const countPersons  = async (queryData) => {
    const query={}
    query[queryData.param]= queryData.value
    console.log(query)
    const countPersons = await Person.count(query)
    return countPersons        
}

export const personById = async (idPersonData) =>{
    const personById = await Person.findById(idPersonData).populate("fromSite")
    return personById
}

export const personByParameter = async (parameterData,parameterPersonData) =>{
    const query={}
    query[parameterData]= parameterPersonData
    const personById = await Person.findOne(query).populate("fromSite")
    return personById
}

export const listPersonsfiltered  = async (FilterData) => {
    const listPersons = await Person.find().populate("fromSite")

    const listPersonsfiltered=listPersons.filter((item)=>{
        const a=(JSON.stringify(item)
           .toUpperCase()
           .indexOf(FilterData.toUpperCase()) > -1 ? 1 : 0)
       return a > 0
      });

    return listPersonsfiltered        
}