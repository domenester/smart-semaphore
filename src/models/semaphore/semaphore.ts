
import {
  ISemaphore, TSemaphorePriority
} from '../../interfaces/isemaphore'

class Semaphore implements ISemaphore {

  readonly id: string

  flowsTo?: Array<ISemaphore>
  flowedFrom?: Array<ISemaphore>

  private _traficLimit: number
  private _traficAmount = 0
  private _isOpen: boolean
  private _priority: TSemaphorePriority

  constructor (
    id: string,
	  traficLimit: number,
    priority: TSemaphorePriority,
    flowsTo?: Array<ISemaphore>,
    flowedFrom?: Array<ISemaphore>
  ) {
    this.id = id
    this._traficLimit = traficLimit
    this._priority = priority
  }

  public requestOpening = async (tos: Array<ISemaphore>) => {
    const awnsers = await Promise.all(
      tos.map(to => to.allowOpening(this._priority)))
    this._isOpen = awnsers.includes(true)
    return this._isOpen
  }

  public allowOpening = (priority: TSemaphorePriority) => {
    return this._isOpen || (this._priority < priority && this._traficAmount < this._traficLimit)
  }

  public get traficLimit () {
    return this._traficLimit
  }

  public set traficLimit (value: number) {
    this._traficLimit = value
  }

  public get traficAmount () {
    return this._traficAmount
  }

  public set traficAmount (value: number) {
    this._traficAmount = value
  }

  public get isOpen () {
    return this._isOpen
  }

  public set isOpen (value: boolean) {
    this._isOpen = value
  }

  public get priority () {
    return this._priority
  }

  public set priority (value: TSemaphorePriority) {
    this._priority = value
  }
}
