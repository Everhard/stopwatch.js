function stopWatch() {
    
    this.startTime = 0;
    
    this.start = function() {
        this.startTime = new Date().getTime();
    }
    
    this.is_started = function() {
        return this.startTime == 0 ? false : true;
    }
    
    this.getTime = function() {
        var currentTime = new Date().getTime();
        var interval = currentTime - this.startTime;
        var stopWatchTime = new Date(interval);
        
        /*
         * Get new values:
         */
        var milliseconds = stopWatchTime.getMilliseconds();
        var seconds = stopWatchTime.getSeconds();
        var minutes = stopWatchTime.getMinutes();
        var hours = stopWatchTime.getUTCHours();
        var days = stopWatchTime.getDate() - 1;
        
        return {
            milliseconds: milliseconds,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days
        };
    }
}

function stopWatchTemplate(id) {
    
    this.template = document.getElementById(id);
    
    /*
     * Render template:
     */
    this.render = function(stopWatchTime) {
        
        this.milliSeconds.innerHTML = this.format(stopWatchTime.milliseconds, 3);
        this.seconds.innerHTML = this.format(stopWatchTime.seconds, 2);
        this.minutes.innerHTML = this.format(stopWatchTime.minutes, 2);
        this.hours.innerHTML = this.format(stopWatchTime.hours, 2);
        this.days.innerHTML = this.format(stopWatchTime.days, 2);
    }
    
    /*
     * Create template:
     */
    this.create = function() {
        
        this.milliSeconds = document.createElement('span');
        this.seconds = document.createElement('span');
        this.minutes = document.createElement('span');
        this.hours = document.createElement('span');
        this.days = document.createElement('span');

        this.milliSeconds.className = 'milliseconds';
        this.seconds.className = 'seconds';
        this.minutes.className = 'minutes';
        this.hours.className = 'hours';
        this.days.className = 'days';
        
        this.template.appendChild(this.days);
        this.template.appendChild(this.hours);
        this.template.appendChild(this.minutes);
        this.template.appendChild(this.seconds);
        this.template.appendChild(this.milliSeconds);
    }
    
    /*
     * Format output values:
     */
    this.format = function(value, capacity) {
        
        switch (capacity) {
            case 2:
                if (value < 10) {
                    value = "0" + value;
                }
                break;
                
            case 3:
                if (value < 10) {
                    value = "00" + value;
                }else if (value < 100) {
                    value = "0" + value;
                }
                break;
        }
        
        return value;
    }
    
    /*
     * Constructor:
     */
    this.create();
    
    this.render({
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
    });
}

$(document).ready(function() {
    
    var stopWatchInterval = 41;
    
    var stopWatchBlock = new stopWatchTemplate("stopwatch");
    var stopWatchCounter = new stopWatch();

    /*
     * Start stopwatch:
     */
    $(".start-stop").click(function() {
        
        if (!stopWatchCounter.is_started()) {
            
            stopWatchCounter.start();
            
            setInterval(function() {
                
                var stopWatchTime = stopWatchCounter.getTime();
                
                /*
                 * Render stopwatch template:
                 */
                stopWatchBlock.render(stopWatchTime);

            }, stopWatchInterval);
        }
    });
    
    

    
});