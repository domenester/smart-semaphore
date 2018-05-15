
import {
  ISemaphore, ISemaphoreNear, TSemaphoreStatus, TGeoDirection
} from '../../interfaces/isemaphore'

class Semaphore implements ISemaphore {

  readonly id: string

  public traficLimit: number

  public traficAmount: number

  public status: 'red' | 'yellow' | 'green'

  public traficFlow: TGeoDirection

  public semaphoresNear: Array<ISemaphoreNear>

  constructor (traficLimit: number, traficAmount: number, traficFlow: TGeoDirection, semaphoresNear?: Array<ISemaphoreNear>) {
    this.traficLimit = traficLimit
    this.traficAmount = traficAmount
    this.semaphoresNear = semaphoresNear
  }

  public warnLimit () {
    return this.traficAmount
  }

  public setStatus (status: TSemaphoreStatus) {
    this.status = status
  }

}

// const semaphore1 = new Semaphore(10, 0, "north", [{
//   semaphore: semaphore1,
//   geoDirection: "south"
// }]);

// const semaphore2 = new Semaphore(10, 0, "north", [{
//   semaphore: semaphore1,
//   geoDirection: "south"
// }]);

// const semaphore3 = new Semaphore(10, 0, "north", [{
//   semaphore: semaphore1,
//   geoDirection: "south"
// }]);

// const semaphore4 = new Semaphore(10, 0, "north", [{
//   semaphore: semaphore1,
//   geoDirection: "south"
// }]);
