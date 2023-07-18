import jwt from 'jsonwebtoken'
import { QueryResult } from '../utils/DbQuery.js'
import { UnauthenticatedError } from '../errors/index.js'
export const checkRights = (section) => {
  return async (req, res, next) => {
    const roleHeaders = jwt.decode(req.headers.role)
    const role = roleHeaders.role
    const query = `select * from ROLES where role='${role}'`
    const result = await QueryResult(query)
    const rights = result[0]
    if (
      (section === 'inventory' && rights.inventory === 1) ||
      (section === 'orders' && rights.orders === 1) ||
      (section === 'employees' && rights.employees === 1) ||
      (section === 'manageProducts' && rights.manageProducts === 1) ||
      (section === 'manageRights' && rights.manageRights === 1) ||
      (section === 'manageClients' && rights.manageClients === 1)
    ) {
      next()
    } else {
      throw new UnauthenticatedError(
        "You don't have the rights to access this content"
      )
    }
  }
}
