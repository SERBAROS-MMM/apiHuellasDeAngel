import Role from './../models/Role'

export const createRoles = async () =>{
    
    try {
        const count = await Role.estimatedDocumentCount()

        if(count >0) return

        const values = await Promise.all([
            new Role ({name: 'administrador'}).save(),
            new Role ({name: 'usuario'}).save()
        ])

        console.log(values.length, ' Roles created')

    } catch (error) {
        console.log(error)
    }
    
}
