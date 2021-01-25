import FromSite from './../../models/FromSite'

export const listFromSites  = async () => {
    const listFromSites = await FromSite.find()
    return listFromSites        
}

export const fromSiteById = async (idFromSiteData) =>{
    const fromSiteById = await FromSite.findById(idFromSiteData)
    return fromSiteById
}

export const fromSiteByParameter = async (parameterData,parameterFromSiteData) =>{
    const query={}
    query[parameterData]= parameterFromSiteData
    const fromSiteById = await FromSite.findOne(query)
    return fromSiteById
}

export const listFromSitesfiltered  = async (FilterData) => {
    const listFromSites = await FromSite.find()

    const listFromSitesfiltered=listFromSites.filter((item)=>{
        const a=(JSON.stringify(item)
           .toUpperCase()
           .indexOf(FilterData.toUpperCase()) > -1 ? 1 : 0)
       return a > 0
      });

    return listFromSitesfiltered        
}