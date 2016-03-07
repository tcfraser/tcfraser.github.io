---
layout: post
title: Hamilton-Jacobi Equation
latex: mathjax-autonumber
---

The [Hamilton-Jacobi Equation](https://en.wikipedia.org/wiki/Hamilton%E2%80%93Jacobi_equation) can be taken to be a formalism of classical mechanics; similar to [Lagrangian Mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics) or [Hamiltonian Mechanics](https://en.wikipedia.org/wiki/Hamiltonian_mechanics); all of which are intimately related of course. In the process of trying to digest and understand the history and structure of the formalism, I came across a really brilliant method for deriving the Hamilton Jacobi Equation using vector calculus techniques and beginning directly from Newton's law $\der{\vec{p}}{t} = -\vec{\nabla}U$.

<!--more-->

## Typical Developments

Typically, the Hamilton-Jacobi equation requires treatment of multi-linear, alternating $n$-forms $\omega : V^n \rightarrow \mathbb{R}$ and the bi-characteristics associated with eigenvectors of the [exterior derivative](https://en.wikipedia.org/wiki/Exterior_derivative) $\dif \omega$. Usually, Hamilton-Jacobi mechanics is the manifestation of constructing canonical transformations using generating functions that reduce the equations of motion which are generally,

$$
\der{\vec{p}}{t} = - \pder{H}{q} \qquad \der{\vec{q}}{t} = \pder{H}{p}
$$

To the trivial case of

$$
\der{\vec{p}}{t} = \vec{0} \qquad \der{\vec{q}}{t} = \vec{0}
$$

For more, see Alan Chang's [An Overview of The Hamilton-Jacobi Equation](http://www.math.uchicago.edu/~ac/hje.pdf).

## Newton's Law as a Scalar Momentum Potential

As a result of trying to teach myself Hamilton-Jacobi Mechanics, I came across Alex Granik's [brilliant method](http://cds.cern.ch/record/642707/files/0309059.pdf) of deriving the Hamilton-Jacobi equation using Newton's Law. This is my attempt to summarize and elaborate upon his method in hopes of clarifying it for others. To begin, assume Newton's second law holds,

$$
\der{\vec{p}}{t} = -\vec{\nabla}U
$$

The insight begins with the treatment of momentum as a vector *field* that depends on both time *and* space.

$$
\vec{p}(t) \rightarrow \vec{p}(\vec{x},t)
$$

This shift in thinking can be thought of as the momentum of a fluid at every point in space, as done in [fluid mechanics](https://en.wikipedia.org/wiki/Fluid_mechanics). In doing so, one can explore the full derivative of the momentum as a partial and [convective derivative](http://mathworld.wolfram.com/ConvectiveDerivative.html) separately.

$$
\der{\vec{p}}{t} = \pder{\vec{p}}{t} + \pder{\vec{p}}{x}\pder{x}{t} + \pder{\vec{p}}{y}\pder{y}{t} + \pder{\vec{p}}{z}\pder{z}{t}
$$

Which can be more suggestively be written,

$$
\begin{equation}
\der{\vec{p}}{t} = \pder{\vec{p}}{t} + \br{\vec{v} \cdot \vec{\nabla}}\vec{p}
\end{equation}
\label{eq:derivative}
$$

Where $\vec{v}$ is the actual velocity of the fluid or the vector field. However, the vector field is related to the momentum field in the expected manner $\vec{p} = m \vec{v}$. Therefore,

$$
\begin{equation}
\pder{\vec{p}}{t} + \f{1}{m} \br{\vec{p} \cdot \vec{\nabla}}\vec{p} = -\vec{\nabla}U
\end{equation}
\label{eq:convective}
$$

Which can be cleaned up by using the gradient of a vector dot product identity,

$$
\begin{equation}
\br{\vec{p} \cdot \vec{\nabla}}\vec{p} = \f{1}{2} \vec{\nabla}\br{\vec{p} \cdot \vec{p}} - \vec{p} \times \br{\vec{\nabla} \times \vec{p}}
\end{equation}
\label{eq:identity}
$$

Now the cleverness of Alex Granik begins by noticing that the gradient of a scalar field $U$ is [always curl-less](http://mathinsight.org/curl_gradient_zero). Therefore, the dependence on the scalar potential $U$ can be eliminated by taking the curl of both sides of \eqref{eq:convective}.

$$
\vec{\nabla}\times \pder{\vec{p}}{t} + \vec{\nabla}\times \f{1}{m} \br{\vec{p} \cdot \vec{\nabla}}\vec{p} = -\vec{\nabla}\times \vec{\nabla}U = \vec{0}
$$

Substituting in \eqref{eq:identity},

$$
\pder{}{t}\br{\vec{\nabla} \times \vec{p}} + \f{1}{m} \vec{\nabla}\times \br{\f{1}{2} \vec{\nabla}\br{\vec{p} \cdot \vec{p}} - \vec{p} \times \br{\vec{\nabla} \times \vec{p}}} = \vec{0}
$$

Again noticing that the curl of a gradient is always zero,

$$
\pder{}{t}\br{\vec{\nabla} \times \vec{p}} - \f{1}{m} \vec{\nabla}\times \br{\vec{p} \times \br{\vec{\nabla} \times \vec{p}}} = \vec{0}
$$

## Solution

At first, solving this equation might seem tricky. Quite nicely however, notice that if $\vec{\nabla} \times \vec{p} = \vec{0}$, the equation is satisfied. This implies that [irrotational](http://mathworld.wolfram.com/IrrotationalField.html) momentum fields satistfy Newton's second law. Provided the domain of the problem is [simply connected](https://en.wikipedia.org/wiki/Simply_connected_space), it means that the momentum field is a [conservative field](https://en.wikipedia.org/wiki/Conservative_vector_field). Therefore by a [Helmholtz decomposition](https://en.wikipedia.org/wiki/Helmholtz_decomposition), we can write,

$$
\vec{p} = \vec{\nabla} \phi
$$

Where $\phi$ is just some scalar field known as Hamiltonian's Principal Function. It *generates* the momentum of the system through differentiation. In order to determine the form of $\phi$, let's substitute it back into Newton's law \eqref{eq:convective} and making use of \eqref{eq:identity},

$$
\pder{}{t}\br{\vec{\nabla} \phi} + \f{1}{2m} \vec{\nabla}\br{\vec{\nabla} \phi}^2 = -\vec{\nabla}U
$$

Factoring out the gradient,

$$
\vec{\nabla}\bs{\pder{\phi}{t} + \f{1}{2m} \br{\vec{\nabla} \phi}^2 +  U} = \vec{0}
$$

Therefore the scalar field inside square brackets must be only dependent on time. Let $f(t)$ be this function,

$$
\pder{\phi}{t} + \f{1}{2m} \br{\vec{\nabla} \phi}^2 +  U = f(t)
$$

Modifying $\phi$ to become $\phi' = \phi - \int_{t_0}^{t} f(t') \dif t'$ eliminates the dependence on $f(t)$.

$$
\pder{\phi'}{t} + \f{1}{2m} \br{\vec{\nabla} \phi'}^2 +  U = 0
$$

This is the **Hamiltonian-Jacobi equation**.

## Physics

So what does $\phi'$ represent *physically*? It seems like some sort of modified momentum potential. Let us return to the notion that $\vec{p} = m \vec{v}$. Notice that the gradient of $\phi$ and $\phi'$ are identical by construction,

$$
\vec{\nabla} \phi = \vec{\nabla} \phi' \rightarrow \vec{p} = \vec{\nabla} \phi'
$$

Therefore the squared term becomes,

$$
\f{1}{2m}\br{\vec{\nabla} \phi'}^2 = \f{1}{2m}\vec{p} \cdot \vec{p} = \f{1}{2}mv^2
$$

This is simply the kinetic energy of the system $T$. Which more suggestively can be written as a difference with a convective term,

$$
\f{1}{2m}\br{\vec{\nabla} \phi'}^2 = mv^2 - \f{1}{2}mv^2 = \vec{v} \cdot \vec{p} - \f{1}{2}mv^2 = \vec{v} \cdot \vec{\nabla} \phi' - T 
$$

Therefore the Hamiltonian-Jacobi equation becomes,

$$
\pder{\phi'}{t} + \vec{v} \cdot \vec{\nabla} \phi' = T - U
$$

The left hand side is just a full time derivative analogous to \eqref{eq:derivative}. The right hand side is quite remarkably the [Lagrangian](https://en.wikipedia.org/wiki/Lagrangian_mechanics) of the system $\mathcal{L}$,

$$
\der{\phi'}{t} = \mathcal{L}\br{\vec{x}, \dot{\vec{x}}, t'}
$$

Which can be solved for $\phi'$ quite trivially as,

$$
\phi' = \int_{t_0}^{t} \mathcal{L}\br{\vec{x}, \dot{\vec{x}}, t'} \dif t'
$$

Those familiar with Lagrangian mechanics will recognize that $\phi'$ takes on the form of the [Action of the system](https://en.wikipedia.org/wiki/Action_(physics)). Thus this unknown quantity that acts sort of like a momentum potential is the classical action of the system $\phi' = S$. Therefore the Hamiltonian-Jacobi equation can be written as,

$$
\pder{S}{t} + \f{1}{2m} \br{\vec{\nabla} S}^2 +  U = 0
$$

## Physical Generator

The classical action $S$ is fairly simple. Constructing it in the above fashion illustrates how Newton's law can be turned into a PDE. The action $S$ behaves as a [generating function](https://en.wikipedia.org/wiki/Generating_function) for the momentum of the system.

$$
\vec{p} = \vec{\nabla} S
$$

It just so happens that the function $f(t)$ above is actually $f(t) = -Et$ (can you see why this is the case?). This makes the partial derivative of $S = \phi'$ with respect to time the energy of the system. Therefore the **partial derivatives of S generate physical quantities**.

$$
\pder{S}{t} = - E \quad \pder{S}{x} = p_x \quad \pder{S}{y} = p_y \quad \pder{S}{z} = p_z
$$

Under this understanding, the Hamilton-Jacobi equation is nothing more than a statement of conservation of energy.

$$
U - E + \f{p^2}{2m} = 0 \implies E = T + U
$$

Where $T$ is the kinetic energy of the system. This is directly analogous to how [Helmholtz free energy](https://en.wikipedia.org/wiki/Helmholtz_free_energy) can be used as a generator for all thermodynamical quantities.