---
layout: post
title: Toroidal Langton's Ant
latex: mathjax
js: langtons_ant
---

[Langton's Ant](https://en.wikipedia.org/wiki/Langton%27s_ant) is an extremely well known example of finite automata first invented by Chris Langton in 1986. It is provably turing complete and is studied extensively. As an exercise, I look at embedding the ant in a [toroidal](https://en.wikipedia.org/wiki/Torus) world so that the typical attractor is no longer stable.
<!--more-->

## Rules
The standard rules of Langton's ant are simple. The ant (the red square) lives in a grid world where it can only move forward. The rules are summarized as follows. At each each iteration, the ant turns according to the color it is on:

- On a white square, the ant turns $90^{o}$ toward the right
- On a black square, the ant turns $90^{o}$ toward the left

In both cases, the ant then flips the color of the square and moves forward. 

## Examples

### Introduction
Below the ant is moving at a relatively slow speed for visualization purposes.
<canvas class="langtons_ant" width="500" height="500"></canvas>

### Attractor
The characteristic feature of Langton's ant is it's emergent order. After over $10,000$ steps of seeming randomness, a stable and repeaing $104$ cycle emerges as the ant *travels* in one direction forever. When the ant reaches the end of the world, the simulation repeats itself.
<canvas class="langtons_ant" width="500" height="500"></canvas>

### Torus
Instead of allowing the ant to reach the edge of the world, it can instead wrap around the edges and interact with active cells from before.
<canvas class="langtons_ant" width="500" height="500"></canvas>

### Stress Test
Here is extend of what my code comfortably handle. The code can be found [here](/js/langtons_ant.js)
<canvas class="langtons_ant" width="1000" height="1000"></canvas>