
![Gameboy](https://i.imgur.com/5GqO4dn.png)


# React Gameboy 🐍🍎🎮

### Play now: https://react-gameboy.netlify.app/

### About
The main idea was to create my own game logic without using canvas or any side game library. Snake 🐍 mechanics is written with help of custom written hooks. So the whole game engine is just written with pure js and react. [Below you can find more information about how this whole mechanism works.](https://github.com/IlyaAgarishev/react-gameboy#how-it-works)

![Gameboy](https://i.imgur.com/hc96tls.gif)

### How it works
All logic is broken down into several hooks: `useSnakeMotion`, `useSnakeHasFailed`, `useSnakeColor`, `useRandomFoodCoordinate`, `useLastControlKeyPressed`. And the main hook `useSnake` simply combines the work of above hooks.

Then `GameplayScreen` component calls useSnake hook 
```javascript
const snakeData = useSnake();
```
So `snakeData` contains all the information needed to render the whole game snake logic in UI.
The `snakeData` is rendered on the special ui grid.

The grid is just a matrix with a size of 144 elements:
```javascript
const sizeOfMatrix: number = 144;
const matrix: Array<number> = [...Array(sizeOfMatrix)].map((el, i) => i);
```

### Fully mobile optimized:
![Mobile Gameboy](https://i.imgur.com/wowXW6C.gif)

### How to start locally

1.  `npm install` - install all dependencies
2.  `npm start` - start a project

### Technologies used
- React
- Redux Toolkit
- Typescript
