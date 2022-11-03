# useOnline

`useOnline` is a tiny, zero-dependency, SSR-friendly hook for responding to online / offline changes. It's a React hook that returns a boolean indicating whether the browser is online or not. Specifically, it's a neat little listener that combines `navigator.onLine` with window event listeners. Since we can't listen to updates on window variables, pairing this with the event listener for each scenario appears to work.

## Installation

```bash
yarn add @haydenbleasel/use-online
```

## Usage

```jsx
import useOnline from '@haydenbleasel/use-online';

const App = () => {
  const isOnline = useOnline();

  return (
    <div>
      <h1>useOnline</h1>
      <p>{isOnline ? 'You are online' : 'You are offline'}</p>
    </div>
  );
};
```
