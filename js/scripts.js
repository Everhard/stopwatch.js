function stopWatchTemplate(id) {
    
    this.template = document.getElementById(id);
    
    /*
     * Render template:
     */
    this.render = function(milliSeconds, seconds, minutes, hours, days) {
        
        this.milliSeconds.innerHTML = this.format(milliSeconds, 3);
        this.seconds.innerHTML = this.format(seconds, 2);
        this.minutes.innerHTML = this.format(minutes, 2);
        this.hours.innerHTML = this.format(hours, 2);
        this.days.innerHTML = this.format(days, 2);
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
}

window.onload = function() {
    
    var stopWatchInterval = 30;
    
    var stopWatch = new stopWatchTemplate("stopwatch");
    var stopWatchCounter = new Date(0);
    
    setInterval(function() {
        
        /*
         * Counting imitation:
         */
        var currentMilliseconds = stopWatchCounter.getMilliseconds();
        stopWatchCounter.setMilliseconds(currentMilliseconds + stopWatchInterval);
        
        /*
         * Get new values:
         */
        var milliseconds = stopWatchCounter.getMilliseconds();
        var seconds = stopWatchCounter.getSeconds();
        var minutes = stopWatchCounter.getMinutes();
        var hours = stopWatchCounter.getHours();
        var days = stopWatchCounter.getDay();
        
        /*
         * Render stopwatch template:
         */
        stopWatch.render(milliseconds, seconds, minutes, hours, days);
        
    }, stopWatchInterval);
    
}