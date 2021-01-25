import FromSite from '../../models/FromSite'

export const updateFromSiteById = async (idFromSiteData,newFromSiteData) =>{
    const fromSiteUptatedById = await FromSite.findByIdAndUpdate(idFromSiteData,newFromSiteData,{new :true})
    return fromSiteUptatedById
}