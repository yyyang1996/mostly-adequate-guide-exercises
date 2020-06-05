import _, { compose } from 'ramda'

var accounting = {
  formatMoney: (v) => '$' + v,
}

// 示例数据
var CARS = [
  { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: 'Spyker C12 Zagato',
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: 'Jaguar XKR-S',
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: 'Pagani Huayra',
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
]

/**************************************************/

// 练习 1:
// ============
// 使用 _.compose() 重写下面这个函数。提示：_.prop() 是 curry 函数
var isLastInStock = function (cars) {
  var last_car = _.last(cars)
  return _.prop('in_stock', last_car)
}

// resolution
// ============
const _isLastInStock = compose(_.prop('in_stock'), _.last)

/**************************************************/

/**************************************************/

// 练习 2:
// ============
// 使用 _.compose()、_.prop() 和 _.head() 获取第一个 car 的 name

// resolution
// ============
var nameOfFirstCar = compose(_.prop('name'), _.head)

/**************************************************/

/**************************************************/
// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
var _average = function (xs) {
  return reduce(add, 0, xs) / xs.length
} // <- 无须改动

var averageDollarValue = function (cars) {
  var dollar_values = map(function (c) {
    return c.dollar_value
  }, cars)
  return _average(dollar_values)
}

// resolution
// ============
const _averageDollarValue = compose(_average, _.map(_.prop('dollar_value')))

/**************************************************/

/**************************************************/

// 练习 4:
// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。

var _underscore = replace(/\W+/g, '_') //<-- 无须改动，并在 sanitizeNames 中使用它

// resolution
// ============
const lowercase = (str) => str.toLowerCase()
var sanitizeNames = _.map(compose(_underscore, lowercase))

/**************************************************/

/**************************************************/

// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

var availablePrices = function (cars) {
  var available_cars = _.filter(_.prop('in_stock'), cars)
  return available_cars
    .map(function (x) {
      return accounting.formatMoney(x.dollar_value)
    })
    .join(', ')
}

// resolution
// ============

const _availablePrices = compose(
  _.join(', '),
  _.map(compose(accounting.formatMoney, _.prop('dollar_value'))),
  _.filter(_.prop('in_stock'))
)

/**************************************************/

/**************************************************/

// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()

var fastestCar = function (cars) {
  var sorted = _.sortBy(function (car) {
    return car.horsepower
  }, cars)
  var fastest = _.last(sorted)
  return fastest.name + ' is the fastest'
}

// resolution
// ============
const _fastestCar = compose(
  _.flip(_.concat(' is the fastest')),
  _.last,
  _.sortBy(_.prop('horsepower'))
)
/**************************************************/
