# StopWatch Online

Stopwatch which you can use for your projects.

[Click here](https://everhard.github.io/StopWatch-Online/) to see how it looks like.

## How to use
Create a new Stopwatch object:
```javascript
var stopWatchCounter = new stopWatch("stopwatch-id");
```

To start the stopwatch use "start" method:
```javascript
stopWatchCounter.start();
```

To pause the stopwatch use "pause" method:
```javascript
stopWatchCounter.pause();
```

To stop the stopwatch use "stop" method:
```javascript
stopWatchCounter.stop();
```

To continue the stopwatch use "continue" method:
```javascript
stopWatchCounter.continue();
```


To check if the stopwatch started use "is_started" method:
```javascript
stopWatchCounter.is_started();
```