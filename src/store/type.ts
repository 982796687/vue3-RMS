import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'
import { IDdashboardState } from './main/analysis/type'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDdashboardState
}
export type IStoreType = IRootState & IRootWithModule
