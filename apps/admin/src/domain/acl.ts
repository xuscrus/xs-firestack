
export enum Roles {
    Admin = 'admin',
    Guest = 'guest'
}

export const RolesOptions = Object.values(Roles).map(role => ({ id: role, name: role }))


export function isAdmin(role: string) {
    return role === Roles.Admin
}