function getTimeFromString(timeString){
    var theTime =new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours( parseInt(time[1])+(time[3] ? 12 : 0));
    theTime.setMinutes( parseInt(time[2]) || 0);
    return theTime.getTime();
}

var  movie1 = {
    title:"The Lion King",
    genre:"Drama",
    rating:5,
    showtimes:["0:00am","3:00om","7:00pm","11:00om"],

    getNextShowing:function (){
        var now=new Date().getTime();

        for(var i=o;i<this.showtimes.length;i++){
            var showtime=getTimeFromString(this.showtime[i]);
            if((showtime-now)>0){
                return "Next showing of" + this.title+" is "+this.showtimes[i];
            }
        }
        return null;
    }
};

var  movie2 = {
    title:"Spider Man",
    genre:"Action",
    rating:5,
    showtimes:["0:00am","1:00om","5:00pm","7:00om"],

    getNextShowing:function (){
        var now=new Date().getTime();

        for(var i=o;i<this.showtimes.length;i++){
            var showtime=getTimeFromString(this.showtime[i]);
            if((showtime-now)>0){
                return "Next showing of" + this.title+" is "+this.showtimes[i];
            }
        }
        return null;
    }
};

var nextShowing=movie1.getNextShowing();
alert(nextShowing);
nextShowing=movie2.getNextShowing();
alert(nextShowing);



