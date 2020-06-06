import { compose } from 'ramda'
export default class IO {
  constructor(f) {
    this.__value = f
  }

  of(f) {
    return new IO(f)
  }

  map(f) {
    return IO.of(compose(f, this.__value))
  }
}
