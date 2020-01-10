import { fetchRequest } from './http'
 
// Get Apps List
export const getAppsList = (params: any):any => fetchRequest('/applications', 'POST', params)
// get Block Height
export const getBlockHeight = () => fetchRequest('/home', 'GET')
// get Acounts Top
export const getFortuneList = (params: any):any => fetchRequest('/accounts/top', 'POST', params)

// get Contracts List
// export const getContactsList = (params: any):any => fetchRequest('/accounts/top', 'POST',params)

export const getTxList = (params: any):any => fetchRequest('/account/txs', 'POST',params)
