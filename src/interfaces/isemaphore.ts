export interface ISemaphore {

  readonly id: string

  traficLimit: number

  traficAmount: number

  traficFlow: TGeoDirection

  status: TSemaphoreStatus

  semaphoresNear?: Array<ISemaphoreNear>

  warnLimit: () => number

  setStatus: (status: TSemaphoreStatus) => void

}

export interface ISemaphoreNear {
  semaphore: ISemaphore
  geoDirection: TGeoDirection
}

export type TGeoDirection = 'north' | 'south' | 'east' | 'west'

export type TSemaphoreStatus = 'red' | 'yellow' | 'green'
