
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
Takes a season number and returns a list of location for where the show took place
season {number} - the desired season of the show
return {list} - names of locations for where the show took place
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
####  Takes the season number and the round during that season and returns the obstacles used during that round of that season
####  Season {number} - the desired season of the show
####  Round {string} - the desired round/stage of the season (ex: Qualifying Round)
####  return {list} - names of obstalces used in that round of the specific season
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
Takes a season number and the round and returns the number of obstacles in that round
season{number}- the desired season of the show
round{string}- the desired round/stage(ex. Qualifying) of the season
return{list}- A number of obstacles
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
Takes the Location and Obstalce and returns the number of obstacles used in that place during that season
Location {string} - The desired Location of where it took place
Obstacle {string} - The desired used during in that place
returns {list} - List of Seasons where those obstalces are used in the inputed locations
function getSeason(location, obstacle)
*/
function getSeason(location, obstacle){
    var seasonList=[]
    for (var i=0; i<seasons.length;i++){
if (locations[i].toLowerCase().includes(location.toLowerCase()) && obstacles[i].toLowerCase().includes(obstacle.toLowerCase()) && !(seasonList.includes(parseInt(seasons[i])))){
    seasonList.push(parseInt(seasons[i]))
}
    }
    if(seasonList.length==0){
        seasonList= "No results"
    }
return seasonList
}  
//console.log(getSeason("venIc", "km"))  

/*
Takes the order and location and returns the obstacle that fills those requirements
order{number}- the desired place in the order of obstacles in a round
location{string}- the desired location of where it took place
returns{list}- returns the obstacle that fills the requirements
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
 
console.log(getObstacleName(9.0, "g"))   
