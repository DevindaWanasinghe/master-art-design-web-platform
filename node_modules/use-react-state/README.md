# use-react-state

> react useState is now more intelligent

[![NPM](https://img.shields.io/npm/v/use-react-state.svg)](https://www.npmjs.com/package/use-react-state) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview

`use-react-state` is an advanced implementation of [react component setState](https://reactjs.org/docs/react-component.html#setstate) to be used as a hook in function components.
It gives almost same and more functionality as [react component setState](https://reactjs.org/docs/react-component.html#setstate).

### Why?
😢😭😿
```jsx
import { useState } from 'react'

function Component(){
  const [first, setFirst] = useState(1)
  const [second, setSecond] = useState(2)
  const [third, setThird] = useState(3)
  const [fourth, setFourth] = useState(4)

  const changeFirstAndSecond = () => {
    setFirst(10)
    setSecond(20)
    // 2x re-render
  }

  const resetState = () => {
    setFirst(1)
    setSecond(2)
    setThird(3)
    setFourth(4)
    // 4x re-render
  }
}
```

😊😃😺😄
```jsx
import useState from 'use-react-state'

function Component(){
  const [state, setState] = useState({
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
  })

  const changeFirstAndSecond = () => {
    setState({
      first: 10,
      second: 20,
    })
    // 1x re-render
  }

  const resetState = () => {
    setState({
      first: 1,
      second: 2,
      third: 3,
      fourth: 4,
    })
    // 1x re-render
  }
}
```

## Install

```bash
yarn add use-react-state
```

## Usage

```js
import React from 'react'

import useState from 'use-react-state'

const App = () => {
  const [state, setState] = useState({ nine: 9 })

  return (
    <div>
      <p>Nine: is {state.nine}</p>

      <button onClick={() => setState(({ nine }) => ({ nine: nine + 1 }))}>
        Increaae state.nine by 1
      </button>
    </div>
  )
}
```

## APIs

### useState

> is a Hook that lets you add React state to function components.

#### @params

- | name                | description           | type  |
  | ------------------- | --------------------- | ----- |
  | **`initialState?`** | state's initial state | `any` |

#### @return

- type `array`
- - `state` | current state value | `any`
- - [setState](#setState) | function to update the state | `function`
- - `stateRef` | state reference | `object`

```js
import useState from 'use-react-state'
const [state, setState, stateRef] = useState(initialState)
```

### setState

> function to update the state.
> setState is an intelligent setter function which guesses how you intends to update an existing state.
> When array is passed as the new state, it assumes you will append the newState array with the current state if current state is an array else it replaces the state. same goes for objects.

#### @params

- | name                     | description                         | type  |
  | ------------------------ | ----------------------------------- | ----- |
  | **`newState\|callback`** | new state to set or setter callback | `any` |

#### using setState

Given the 1st example below, setState will merge new state object with existing state given that existing state is an object.

```js
import useState from 'use-react-state'

const [state, setState, stateRef] = useState({ foo: 'foo' })

// merge state object
setState({ bar: 'bar' }) // {foo: 'foo', bar: 'bar'}

// replace state
setState('foo') // 'foo'

// replace state
setState(['foo']) // ['foo']

// push state array
setState(['bar']) // ['foo', 'bar']

// custom state setter
setState((existingDraftState) => {

  return ['baz']

}) // ['baz']
```

#### using setState's [immer produce feature](https://immerjs.github.io/immer/produce)

setState uses immer's produce feature for state mutation.
Your are not limited to using the functionality as well.

```js
import useState from 'use-react-state'

const [state, setState] = useState({ foo: 'foo' })

// custom state setter with immer feature
setState((existingDraftState) => {

  existingDraftState.bar = 'bar'

}) // {foo: 'foo', bar: 'bar'}
```

## License

MIT © [myckhel](https://github.com/myckhel)
