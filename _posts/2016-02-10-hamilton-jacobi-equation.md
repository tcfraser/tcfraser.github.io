---
layout: post
title: Hamilton-Jacobi Equation
published: false
---

The [Hamilton-Jacobi Equation](https://en.wikipedia.org/wiki/Hamilton%E2%80%93Jacobi_equation) can be taken to be a formalism of classical mechanics; similar to [Lagrangian Mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics) or [Hamiltonian Mechanics](https://en.wikipedia.org/wiki/Hamiltonian_mechanics). All of which are intimately related of course. In the process of trying to digest and understand the history and structure of the formalism, I came across a really "quick and dirty" method for deriving the Hamilton Jacobi Equation by beginning directly from Newton's law $\der{\vec{p}}{t} = -\vec{\nabla}U$.

<!--more-->

## Typical Developments

Typically, the Hamilton-Jacobi equation requires treatment of multi-linear, alternating $n$-forms $\omega : V^n \rightarrow \mathbb{R}$ and the bi-characteristics associated with eigenvectors of $\dif \omega$. Usually, Hamilton-Jacobi mechanics is the manifestation of constructing canonical transformations using generating functions that reduce the equations of motion which are generally,

$$
\der{\vec{p}}{t} = - \pder{H}{q} \qquad \der{\vec{q}}{t} = \pder{H}{p}
$$

To the trivial case of

$$
\der{\vec{p}}{t} = \vec{0} \qquad \der{\vec{q}}{t} = \vec{0}
$$

For more, see Alan Chang's [An Overview of The Hamilton-Jacobi Equation](http://www.math.uchicago.edu/~ac/hje.pdf).

## Quick & Dirty

As a result of trying to teach myself Hamilton-Jacobi Mechanics, I came across Alex Granik's [brilliant method](http://cds.cern.ch/record/642707/files/0309059.pdf) of deriving the Hamilton-Jacobi equation using Newton's Law. This is my attempt to summarize and elaborate upon his method in hopes of clarifying it for others. To begin, assume Newton's second law,

$$
\der{\vec{p}}{t} = -\vec{\nabla}U
$$

The insight begins with the treatment of momentum as a vector *field* that depends on both time *and* space.

$$
\vec{p}(t) \rightarrow \vec{p}(\vec{x},t)
$$

This shift in thinking can be thought of as the momentum of a fluid at every point in space, as done in [fluid mechanics](https://en.wikipedia.org/wiki/Fluid_mechanics). In doing so, one can explore the full derivative of the momentum as a partial and [convective derivative](http://mathworld.wolfram.com/ConvectiveDerivative.html) separately. Therefore,

$$
\der{\vec{p}}{t} = \pder{\vec{p}}{t} + \br{\vec{v} \cdot \vec{\nabla}}\vec{p}
$$

Where $\vec{v}$ is the actual velocity of the fluid or the vector field. However, the vector field is related to the momentum field in the expected manner $\vec{p} = m \vec{v}$. Therefore,

$$
\pder{\vec{p}}{t} + \f{1}{m} \br{\vec{p} \cdot \vec{\nabla}}\vec{p} = -\vec{\nabla}U
$$