import FromSite from './../../models/FromSite'

export const deleteFromSiteById = async (idFromSiteData) =>{
    const fromSiteDeletedById = await FromSite.findByIdAndDelete(idFromSiteData)
    return fromSiteDeletedById
}