
![Gameboy](https://i.imgur.com/NVd0JE7.png)


# React Gameboy 🐍🍎🎮

### Play now: https://react-gameboy.netlify.app/

### About
The main idea was to create my own game logic without using canvas or any side game library. Snake 🐍 mechanics is written with help of custom written hooks. So the whole game engine is just written with pure js and react. [Below you can find more information about how this whole mechanism works.](https://github.com/IlyaAgarishev/react-gameboy/blob/master/README.md#how-it-works)

![Gameboy](https://i.imgur.com/hc96tls.gif)

### How it works
All logic is broken down into several hooks: `useSnakeMotion`, `useSnakeHasFailed`, `useSnakeColor`, `useRandomFoodCoordinate`, `useLastControlKeyPressed`. And the main hook `useSnake` simply combines the work of above hooks.

### Mobile optimized:
![Mobile Gameboy](https://i.imgur.com/wowXW6C.gif)

### How to start locally

1.  `npm install` - install all dependencies
2.  `npm start` - start a project

### Technologies used
- React
- Redux Toolkit
- Typescript
