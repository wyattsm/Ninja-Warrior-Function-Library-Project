####  Takes a season number and returns a list of location for where the show took place
####  season {number} - the desired season of the show
####  return {list} - names of locations for where the show took place
**`  function getLocation(season) `**


####  Takes the season number and the round during that season and returns the obstacles used during that round of that season
####  Season {number} - the desired season of the show
####  Round {string} - the desired round/stage of the season (ex: Qualifying Round)
####  return {list} - names of obstalces used in that round of the specific season
**`function getObstacles(season,round)`**

#### Takes a season number and the round and returns the number of obstacles in that round
#### season{number}- the desired season of the show
#### round{string}- the desired round/stage(ex. Qualifying) of the season
#### return{list}- A number of obstacles
**`function getNumberRounds(season,round)`**

# FOURTH FUNCTION

####  Location + obstacle=season
####  Takes the location and obstacle name
####  Makes a list variable to hold the seasons
####  Allows for minor misspelling and capitilization errors
####  Pushes the results to the list
####  Makes an error message if the length of the list is 0
####  Returns the results

# FIFTH FUNCTION

####  Takes the order and location and returns the obstacle that fills those requirements
####  order{number}- the desired place in the order of obstacles in a round
####  location{string}- the desired location of where it took place
####  returns{list}- returns the obstacle that fills the requirements
**`function getObstacleName(order, location)`**
