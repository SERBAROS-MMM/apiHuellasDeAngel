import FromSite from './../../models/FromSite'

export const addFromSite = async (newFromSiteData) => {
    
        const fromSiteNew = await FromSite.create(newFromSiteData)
        return fromSiteNew        
  
}