
function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }

 var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Miscellaneous/American%20Ninja%20Warrior%20Obstacles.csv"
 var seasons=getColumn(url, 1)
 var locations=getColumn(url,2)
 var rounds=getColumn(url,3)
 var obstacles=getColumn(url,4)
 var orders=getColumn(url,5)

/*
sesaon=locations
takes the season as the input
looks through list of location in the seasons
and adds them to the list if they aren't already on the list
if the season doesn't exist it returns "No results"
*/
 function getLocation(season){
    var locationList=[]
    for (var i=0; i<seasons.length;i++){
        if(seasons[i]==season && !(locationList.includes(locations[i]))){
            locationList.push(locations[i])
        }

    }
    if(locationList.length==0){
        locationList= "No results"
    }
    return locationList
 }
// console.log(getLocation(1)) 
// console.log(getLocation(2))
// console.log(getLocation(3))
// console.log(getLocation(4))
// console.log(getLocation(5))
// console.log(getLocation(6))
// console.log(getLocation(7))
// console.log(getLocation(8))
// console.log(getLocation(9))
// console.log(getLocation(10))
// console.log(getLocation(11))


/*
season+round=obstacle list
takes the season and the type of round(ex. Qualifing, Finals-Stage 1) as an input
and finds the obstacles used in that round
and adds to the list
if the round is minorly mispelled, or has wrong capitalization it still works
*/
function getObstacles(season,round){
    var obstacleList=[]
    for (var i=0; i<seasons.length;i++){
        if (seasons[i]==season && rounds[i].toLowerCase().includes(round.toLowerCase()))
            obstacleList.push(obstacles[i])
    }
    return obstacleList
}
//console.log(getObstacles(1,"qualifyin"))
/*
season+round=number of obstacles in a round
takes the season and the type of round(ex. Qualifing, Finals-Stage 1) as an input
and finds the obstacles used in that round
adds those to the list
finds the list length and returns
*/
function getNumberRounds(season,round){
    var numberObstacles=[]
    for (var i=0; i<seasons.length;i++){
        if (seasons[i]==season && rounds[i].toLowerCase().includes(round.toLowerCase())){
    numberObstacles.push(obstacles)
    }
}
return numberObstacles.length
}
//console.log(getNumberRounds(1, "Qualifying"))


//location+obstacle=season
/*
location+obstacle=season
takes the location and obstacle name
makes a list variable to hold the seasons
allows for minor misspelling and capitilization errors
pushes the results to the list
makes an error message if the length of the list is 0
returns the results
*/
function getSeason(location, obstacle){
    var seasonList=[]
    for (var i=0; i<seasons.length;i++){
if (locations[i].toLowerCase().includes(location.toLowerCase()) && obstacles[i].toLowerCase().includes(obstacle.toLowerCase()) && !(seasonList.includes(seasons[i]))){
    seasonList.push(seasons[i])
}
    }
    if(seasonList.length==0){
        seasonList= "No results"
    }
return seasonList
}
//console.log(getSeason("venIc", "km")) 

/*
place in order+location=obstacle
takes the order and location
makes a list variable to hold the obstacles
allows for minor misspelling and capitilization errors
pushes the results to the list
makes an error message if the length of the list is 0
returns the results
*/
function getObstacleName(order, location){
    var  obstacleList=[]
    for (var i=0; i<seasons.length;i++){
if (locations[i].toLowerCase().includes(location.toLowerCase()) && orders[i]==order&& !(obstacleList.includes(obstacles[i]))){
    obstacleList.push(obstacles[i])
}
}
if(obstacleList.length==0){
    obstacleList= "No results"
}

return obstacleList
}
//console.log(getObstacleName(3, "vn")) 