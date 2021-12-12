// Problem Description
// Imagine you are playing a game represented by a coordinate plane. Each player has an ID and a current position. A current position is represented by an (x, y) coordinate. A coordinate is defined as a pair of positive or negative integers. Players are considered “close” to an (x, y) coordinate if they are within (10, 10) in any direction, inclusive.
// Close definition: Two players are close if the difference of both their xs and ys is less than or equal to 10
// Question: Find the close players for each player
// Input: a list of player objects, below is a JSON representation
const players = [
  {
    "id": 1,
    "x": 0,
    "y": 0
  },
  {
    "id": 2,
    "x": 10,
    "y": 10
  },
  {
    "id": 3,
    "x": 11,
    "y": 10
  },
  {
    "id": 4,
    "x": -10,
    "y": -10
  },
  {
    "id": 5,
    "x": -10,
    "y": -11
  }
]
// Expected output:
// { '1': [ 2, 4 ], '2': [ 1, 3 ], '3': [ 2 ], '4': [ 1, 5 ], '5': [ 4 ] }
function findMatchingPlayers (players){
}
findMatchingPlayers(players)

// O(numberOfPlayers^2)
const bruteForce = (players) => {
  const result = {};
  players.ForEach(({id, x, y}) => {
    const [aId, aX, aY] = [id, x, y];
    // VVV this inner loop is the part that sucks... we need to improve that
    players.ForEach(({id, x, y}) => {
      if(
        Math.abs(a - aX) <= 10 &&
        Math.abs(y - aY) <= 10 &&
        aId !== id
      ){
        result[aId] = result[aId] || [];
        result[aId].push(id);
      }
    });
    // ^^^ shitty inner loop
  });
  return result;
};


/*
How can we get rid of that shitty inner loop? Options:
Use a few binary search trees:
One BST for x axis, one for y axis
Then we can look up players in range in <= log(numberOfPlayers)
Overall could be O(numberOfPlayers*log(numberOfPlayers))*
Fancier: use a quad tree.
Great, but we probably don't want to code that out
In a similar vein, could also consider geohashes but don't want to go that way
Still O(numberOfPlayers*log(numberOfPlayers))
Discuss a few options like this :point_up:
Then consider the variety of ways the input could come in:
If the board is really sparse, iterating over the players like this makes sense.
If the board is really dense (or full!), you'll jump be pumping out result sets of size 100
If that happens, you may just want to iterating over the board with a 2D sliding window, instead of iterating over the players
:point_up: Of these options, the BST and this last one are really the only ones I'd consider coding up. Ask them which they prefer
Does that help?
*tricky because it's actually O(numberOfPlayers*log(numberOfPlayers)+100) if the board is dense, but I think you can scrap the 100 as a 'constant factor' (edited)
*/
