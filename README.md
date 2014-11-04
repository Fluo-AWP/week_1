week_1
======

Exercises
---------
1. Write a JavaScript implementation of the datatype multiset (look here for a Java version) with the following operations: add, remove, count, contains, and toString. You may assume that all objects stored in the multisets have an equals method and a hashCode method. Provide some unit tests to exercise all functionality via an HTML page.
2. 
2. A Web shop wants to sell ice cream online. They offer 5 different kinds of toppings: sprinkles, chocolate chips, strawberry syrup, banana flakes, and caramel sauce. Toppings are chosen using 5 checkboxes. However, some constraints apply:
  1. at most three toppings may be selected
  2. strawberry syrup and caramel sauce cannot both be chosen (too messy!)

Write an HTML document with the form and JavaScript code to continuously enforce the constraints. If the current data in the form is invalid, the user is notified by an appropriate message somewhere on the page and clicking 'submit' will result in an alert window popping up rather than the data being submitted to the server (assuming that the browser does execute the JavaScript code).

3.  Create a version of the classic game Klotski. A klotski game consists of a 4 x 5 game board with some blocks, one of the blocks is special. The goal of the game is to slide the blocks around to allow the special block to reach a goal area on the board. The blocks cannot be removed, only slided vertically or horizontally. See this video for an example.
The set of blocks in the game must be configurable (a fixed file is fine) to allow variations in the game. 
Hints:
To handle keyboard input, use an event listener to catch keyDown events (undergoing standardization).
You can use a div tag with a background color to draw each block, use CSS absolute positioning to place the blocks on the page. It is okay to assume that the blocks are rectangular.
Test your solutions with (at least) Internet Explorer (version 10 or 11) and Chrome.  For these exercises, do not use existing code libraries - i.e., your solutions should be self contained.

Upload your solution to exercises to the peer reviewing system (link coming soon), including brief descriptions of your code and relevant observations.
Log on to the peer reviewing system after the deadline, and make a review of the hand you have been assigned to on the "Reviews" page.


