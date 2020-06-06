export class Left {
  constructor(val) {
    this.__value = val
  }

  of(val) {
    return new Left(val)
  }

  map() {
    return this
  }
}

export class Right {
  constructor(val) {
    this.__value = val
  }

  of(val) {
    return new Right(val)
  }

  map(f) {
    return Right.of(f(this.__value))
  }
}
