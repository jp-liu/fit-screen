# @fit-screen/react

Scale-based large-screen adaptive solution for React

## 🦄 Useage

```bash
npm install @fit-screen/react
# or
yarn add @fit-screen/react
# or
pnpm install @fit-screen/react
```

```react
import { useState } from 'react'
import FitScreen from '@fit-screen/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FitScreen width={1920} height={1080} mode="fit">
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            React logo
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </FitScreen>
  )
}

export default App
```

### Props

| Props      | Type                                               | Information                                                            |
| ---------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| width      | number                                             | The design draft width                                                 |
| height     | number                                             | The design draft height                                                |
| mode       | 'fit' \| 'scroolX' \| 'scroolY' \| 'full'          | Calculation mode                                                       |
| scaleClass | string                                             | Adaptive container class                                               |
| scaleStyle | object                                    \| array | Adaptive container style, Jsx style objects or arrays of style objects |

### Interface

```ts
export interface FitScreenProps {
  /**
   * The design draft width
   * @default 1920
   */
  width?: number
  /**
   * The design draft height
   * @default 1080
   */
  height?: number
  /**
   * Calculation mode
   * @tips
   * 'fit': Adaptive
   * 'scrollX': When the actual width exceeds the width of the design, the x-axis appears to scroll and the y-axis adapts
   * 'scrollY': Contrary to the above
   * 'full': Stretch the page to fill the screen
   */
  mode?: 'fit' | 'scrollX' | 'scrollY' | 'full'
  /**
   * The root container class name
   */
  className?: string
  /**
   * Slots
   */
  children: React.ReactNode
  /**
   * Adaptive container style
   */
  scaleClass?: string
  /**
   * Adaptive container style
   */
  scaleStyle?: Record<string, string> | Record<string, string>[]
}
```

### 🌰 Example

## License

[MIT](./LICENSE) License © 2022 [jp-liu](https://github.com/jp-liu)
