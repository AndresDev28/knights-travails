# Knight's Travails

## Table of Contents
- [Introduction](#introduction)
- [Problem Description](#problem-description)
- [Solution Approach](#solution-approach)
- [How It Works](#how-it-works)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project solves the "Knight's Travails" problem by finding the shortest path for a knight to travel between two squares on a standard 8x8 chessboard. The problem is modeled as a graph traversal problem, where each square on the chessboard is a node, and the knight's valid moves represent edges between nodes.

The solution uses the **Breadth-First Search (BFS)** algorithm to efficiently find the shortest path.

## Problem Description
Given a starting position and an ending position on a chessboard, the task is to determine the shortest sequence of moves a knight can make to reach the destination. The knight moves in an "L" shape: two squares in one direction and then one square perpendicular, or one square in one direction and then two squares perpendicular.

Example:
```plaintext
knightMoves([0, 0], [3, 3]) => [[0, 0], [2, 1], [3, 3]]
```
# Solution Approach
1. ## Graph Representation: 
The chessboard is implicitly represented as a graph, where each square is a node, and the knight's valid moves are the edges.
2. ## BFS Algorithm: 
BFS is used to explore all possible moves from the starting position, ensuring the shortest path is found.
3. ## Move Generation: 
A helper function generates all valid moves for the knight from a given position, ensuring moves stay within the bounds of the chessboard.
4. ## Path Reconstruction: 
Once the destination is reached, the path is reconstructed using parent pointers stored during the BFS traversal.

# How It Works
1. The program starts at the given starting position.
2. It explores all possible moves the knight can make using BFS.
3. If the destination is reached, the program reconstructs the path taken.
4. The result is displayed as a list of positions the knight traversed.

# Usage
To use this project:

1. Clone the repository:
`git clone https://github.com/AndresDev28/knights-travails`

2. Navigate to the project directory:
`cd knights-travails`

3. Run the program
`node knightMoves.js`

4. Example usage:
`console.log(knightMoves([0, 0], [7, 7]));`
// Output: [[0, 0], [2, 1], [4, 2], [6, 3], [4, 4], [6, 5], [7, 7]]

# Technologies Used
-**JavaScript** : The project is implemented in JavaScript.
-**Breadth-First Search (BFS)** : Algorithm used for finding the shortest path.

# Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes.

# License
This project is licensed under the MIT License