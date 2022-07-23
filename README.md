# stopwatch.js

This is a simple and lightweight library, that adds a stopwatch to an HTML page.

Here's a [demo](https://everhard.github.io/StopWatch-Online/).

## How to install
Just include the library into your HTML page:
```html
<script src="js/stopwatch.js"></script>
```

## How to use
Add some block element to your HTML and give it some ID:
```html
<div id="stopwatch"></div>
```

Now create a `StopWatch` object using an ID as a parameter:
```javascript
var stopWatch = new StopWatch("stopwatch");
```

That's it! Now your DOM was changed to the next structure:
```html
<div id="stopwatch">
    <span class="days">00</span>
    <span class="hours">00</span>
    <span class="minutes">00</span>
    <span class="seconds">00</span>
    <span class="milliseconds">000</span>
</div>
```

And you can customize the appearance whatever you like using CSS.

### Control

| Method              | Description        |
|---------------------|--------------------|
| `stopWatch.start()` | Start a stopwatch. |
| `stopWatch.pause()` | Pause a stopwatch. |
| `stopWatch.stop()`  | Stop a stopwatch.  |

## Properties

| Properties               | Description                                |
|--------------------------|--------------------------------------------|
| `stopWatch.milliseconds` | The value of the *milliseconds* part.      |
| `stopWatch.seconds`      | The value of the *seconds* part.           |
| `stopWatch.minutes`      | The value of the *minutes* part.           |
| `stopWatch.hours`        | The value of the *hours* part.             |
| `stopWatch.days`         | The value of the *days* part.              |
| `stopWatch.isRunning`    | Set to `true` when a stopwatch is running. |
| `stopWatch.isPaused`     | Set to `true` when a stopwatch is paused.  |
