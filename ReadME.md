# GET COLUMN FUNCTION

####  This function allows to enter the parameters of a url that is stored in a 
####  Variable and the column number that you want information
####  And turn these into a variable or something else



####  Takes a season number and returns a list of location for where the show took place
####  season {number} - the desired season of the show
####  return {list} - names of locations for where the show took place
**`  function getLocation(season) `**


####  Season+round=obstacle list  Takes the season number and the round and returns the obstacles used during that round of that season
####  Season {number} - the desired season of the show
####  Round {string} - the desired round/stage of the season (ex: Qualifying Round)
####  return {list} - names of obstalces used in that round of the specific season
**`function getObstacles(season,round)`**

####  Season+round=number of obstacles in a round
####  Takes the season and the type of round(ex. Qualifing, Finals-Stage 1) as an input
####  And finds the obstacles used in that round
####  Adds those to the list
####  Finds the list length and returns

# FOURTH FUNCTION

####  Location + obstacle=season
####  Takes the location and obstacle name
####  Makes a list variable to hold the seasons
####  Allows for minor misspelling and capitilization errors
####  Pushes the results to the list
####  Makes an error message if the length of the list is 0
####  Returns the results

# FIFTH FUNCTION

####  Place in order+location=obstacle
####  Takes the order and location
####  Makes a list variable to hold the obstacles
####  Allows for minor misspelling and capitilization errors
####  Pushes the results to the list
####  Makes an error message if the length of the list is 0
####  Returns the results
