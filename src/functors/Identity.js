export default class Identity {
  constructor(value) {
    this.__value = value
  }

  of(val) {
    return new Identity(val)
  }

  map(f) {
    return Identity.of(f(this.__value))
  }
}
