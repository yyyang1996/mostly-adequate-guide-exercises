import { curry } from 'ramda'
import { Left, Right } from './Either'

// map :: Functor f => (a -> b) -> f a -> f b
export const fmap = curry((f, functor) => {
  return functor.map(f)
})

// maybe :: b -> (a -> b) -> Maybe a -> b
export const maybe = curry((x, f, m) => {
  return m.isNothing() ? x : f(m.__value)
})

// either :: (a -> c) -> (b -> c) -> Either a b -> c
export const either = curry((f, g, e) => {
  switch (e.constructor) {
    case Left:
      return f(e.__value)
    case Right:
      return g(e.__value)
  }
})
