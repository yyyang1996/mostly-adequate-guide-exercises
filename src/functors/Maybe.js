export default class Maybe {
  constructor(value) {
    this.__value = value
  }

  of(val) {
    return new Maybe(val)
  }

  map(f) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
  }

  isNothing() {
    return this.__value === null || this.__value === undefined
  }
}
