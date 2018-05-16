export interface ISemaphore {

  readonly id: string

  traficLimit: number

  traficAmount: number

  isOpen: boolean

  priority: TSemaphorePriority

  flowsTo?: Array<ISemaphore>

  flowedFrom?: Array<ISemaphore>

  requestOpening: (tos: Array<ISemaphore>) => void

  allowOpening: (priority: TSemaphorePriority) => boolean
}

export type TSemaphorePriority = 1 | 2 | 3
