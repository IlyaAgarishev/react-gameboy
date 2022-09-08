
![Gameboy](https://i.imgur.com/NVd0JE7.png)


# React Gameboy 🐍🍎🎮

### Play now: https://react-gameboy.netlify.app/

### About
The main idea was to create my own game logic without using canvas or any side game library. Snake 🐍 mechanics is written with help of custom written hooks. So the whole game engine is just written with pure js and react. [Below you can find more information about how this whole mechanism works.](https://github.com/IlyaAgarishev/react-gameboy/blob/master/README.md#how-it-works)

![Gameboy](https://i.imgur.com/hc96tls.gif)

### How it works
All logic is broken down into several hooks: `useSnakeMotion`, `useSnakeHasFailed`, `useSnakeColor`, `useRandomFoodCoordinate`, `useLastControlKeyPressed`. And the main hook `useSnake` simply combines the work of above hooks. Below you can see how `useSnake` is realized:
```javascript
const useSnake = () => {
  // redux hooks:
  const dispatch = useAppDispatch();
  const { setCoordinatesAction, incrementScoreAction, clearScoreAction } =
    snakeSlice.actions;
  const coordinates = useAppSelector((state) => state.snakeReducer.coordinates);
  const snakeHasFailed = useAppSelector(
    (state) => state.snakeReducer.snakeHasFailed
  );

  // custom hooks:

  // useLastControlKeyPressed - to know remember the direction of the snake
  const { lastControlKeyPressed, setDefaultLastControlKeyPressed } =
    useLastControlKeyPressed();

  // useSnakeMotion  - to move, control and make snake bigger
  const {
    increaseTheSizeOfSnake,
    changeSnakeDirection,
    moveTheSnakeByOneSquare,
  } = useSnakeMotion(lastControlKeyPressed);

  // useSnakeColor - to define snake's color
  const { snakeColor, setSnakeColor } = useSnakeColor();

  // useRandomFoodCoordinate - to get food's coordinate and color
  const {
    randomFoodCoordinate,
    generateRandomFoodCoordinate,
    randomFoodColor,
  } = useRandomFoodCoordinate();

  //useSnakeHasFailed - listening if snake is failed
  useSnakeHasFailed();

  // Keep snake moving
  useEffect(() => {
    if (!snakeHasFailed) {
      const interval = setInterval(() => {
        moveTheSnakeByOneSquare();
      }, 120);

      return () => {
        clearInterval(interval);
      };
    }
  }, [coordinates, lastControlKeyPressed, snakeHasFailed]);

  // Change snake direction onkeydown
  useEffect(() => {
    if (!snakeHasFailed) {
      changeSnakeDirection(lastControlKeyPressed);
    }
  }, [lastControlKeyPressed]);

  // Snake Eating logic
  useEffect(() => {
    const lastSnakeCoordinate = coordinates[coordinates.length - 1];

    if (lastSnakeCoordinate === randomFoodCoordinate) {
      dispatch(incrementScoreAction());
      setSnakeColor(randomFoodColor);
      generateRandomFoodCoordinate();
      increaseTheSizeOfSnake();
    }
  }, [coordinates, randomFoodCoordinate, snakeColor, randomFoodColor]);

  // Back to default coordinates when snake is not failed
  useEffect(() => {
    if (!snakeHasFailed) {
      setDefaultLastControlKeyPressed();
      generateRandomFoodCoordinate();
      dispatch(setCoordinatesAction(defaultCoordinates));
      dispatch(clearScoreAction());
    }
  }, [snakeHasFailed]);

  // Return the object from the hook
  return {
    randomFoodCoordinate,
    randomFoodColor,
    snakeColor,
    coordinates,
    snakeHasFailed,
  };
};
```  

### Mobile optimized:
![Mobile Gameboy](https://i.imgur.com/wowXW6C.gif)

### How to start locally

1.  `npm install` - install all dependencies
2.  `npm start` - start a project

### Technologies used
- React
- Redux Toolkit
- Typescript
