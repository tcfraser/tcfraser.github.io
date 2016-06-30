---
layout: post
title: Schrodinger Equation From HJE
latex: mathjax-autonumber
---

The [Schrödinger equation](https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation) much like the [Hamilton-Jacobi equation]({% post_url 2016-02-13-hamilton-jacobi-equation %}) is a partial differential equation for the dynamics and time evolution of a physical system. But how are they different? How are they the same? Are they equivalent?

<!--more-->

## The Answer

The short answer is **yes**, they are equivalent. The long answer is that is requires some *heavy motivation*.

## Heavy Motivation

Recall that Einstein and Compton give us through the [photoelectric effect](https://en.wikipedia.org/wiki/Photoelectric_effect) that the energy of a photon is given by,

$$
E = h f = \f{h\omega}{2 \pi} = \hbar \omega
$$

And De Broglie hypothesis of wave-particle duality introduces the idea that wavelength is related to momentum,

$$
\lambda = \f{h}{p} \implies p = \hbar k
$$

As such, the wave behavior of a particle can be written with momentum and energy as arguments.

$$
\begin{equation}
\psi\br{\vec{x}, t} = \psi_0 e^{i\phi} = \psi_0 e^{i\br{\vec{k}\cdot\vec{x} - \omega t}} = \psi_0 e^{\f{i}{\hbar}\br{\vec{p}\cdot\vec{x} - E t}} \label{eq:wave}
\end{equation}
$$

Notice that argument here $\vec{p}\cdot\vec{x} - Et$ has the same units as the classical action $\text{J}\cdot\text{s}$. Moreover, it **exactly** satisfies the generating relations that the action should hold.

$$
\pder{S}{t} = - E \quad \vec{\nabla}S = \vec{p}
$$

This *strongly* suggests that maybe this argument is the *action itself*.

$$
\begin{equation}
\psi \stackrel{?}{=} \psi_0 e^{\f{i}{\hbar}S} \label{eq:guess}
\end{equation}
$$

This guess is also motivated by [Fermat's principle](https://en.wikipedia.org/wiki/Fermat%27s_principle) and the variation principle that is associated with the classical action $S$. Fermat's principle is the principle of least time. In the context of wave dynamics, this corresponds to minimizing the total phase,

$$
\delta \phi = 0
$$

Which is one-to-one with the variational principle of minimizing the action (solving the Hamilton-Jacobi equation),

$$
\delta S = 0
$$

In conclusion, \eqref{eq:guess} is an excellent guess at the possible form of a general system.

## Derivation of Schrödinger Equation

After motivating \eqref{eq:guess}, Schrödinger's equation is just a consequence of the Hamilton-Jacobi equation (which I remind the reader is just conservation of energy). The Hamilton-Jacobi equation is written as,

$$
\pder{S}{t} + \f{1}{2m} \br{\vec{\nabla} S}^2 +  U = 0
$$

Derivatives of $S$ here can now be replaced with derivatives of $\psi$ using \eqref{eq:guess}. Writing $S$ as a function of $\psi$[^entropy],

[^entropy]: Looks an awful lot like entropy $S = k_B \ln\br{\f{\omega}{\omega_0}}$, huh?

$$
S = -i \hbar \ln\br{\f{\psi}{\psi_0}}
$$

Gives spatial dependence,

$$
\vec{\nabla} S = - \f{i \hbar}{ \psi} \vec{\nabla} \psi
$$


At this step, it is important to recall that \eqref{eq:wave} is in general a complex value. Being careful about the square of $\vec{\nabla} S$ as a complex amplitude,

$$
\abs{\vec{\nabla} S}^2 = \f{\hbar^2}{2m \psi^* \psi} \vec{\nabla} \psi^* \vec{\nabla} \psi
$$

At this point, you might be tempted to write $\pder{S}{t} = - E$. However, we are treating $S$ as a function of $\psi$ which could depend on time in all sorts of ways[^tise]. The corresponding time variation is given by,

[^tise]: Interestingly, subbing in $\pder{S}{t} = -E$ at this stage one will recover the time *indpendent* Schrödinger equation. Can you see what will happen if instead we set $\vec{\nabla} S = \vec{p}$ and not the time components?

$$
\pder{S}{t} = - \f{i\hbar}{\psi} \pder{\psi}{t}
$$

The Hamilton-Jacobi equation can be written in terms of $\psi$ now,

$$
\begin{equation}
- i\hbar \psi^* \pder{\psi}{t} + \f{\hbar^2}{2m}\vec{\nabla} \psi^* \vec{\nabla} \psi + U\psi^* \psi = 0 \label{eq:4terms}
\end{equation}
$$

Quite annoyingly, this seems to be a PDE of $\psi, \psi^\*, \vec{\nabla}\psi, \vec{\nabla}\psi^\*$ but the Schrodinger equation doesn't depend on the conjugated terms. How can one rewrite this expression in terms of just the non-conjugate terms?

## Wizardry

Taking \eqref{eq:4terms} and treating it as a functional [Lagrangian](https://en.wikipedia.org/wiki/Lagrangian) of the system[^Lagrangian], $\mathcal{L}\br{\psi, \psi^\*, \vec{\nabla}\psi, \vec{\nabla}\psi^\*}$, the [Euler-Lagrange equation](https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation) (slightly modified) for $\psi^*$ is given by,

$$
\pder{\mathcal{L}}{\psi^*} - \vec{\nabla} \br{\f{\partial \mathcal{L}}{\partial\br{\vec{\nabla} \psi^*}}} = 0
$$

Which when applied to \eqref{eq:4terms} yields,

$$
- i\hbar \pder{\psi}{t} + U \psi - \f{\hbar^2}{2m}\nabla^2 \psi = 0
$$

Rearrangement precisely gives the Time Dependent Schrödinger equation,

$$
i \hbar \pder{\psi}{t} = \br{- \f{\hbar^2}{2m} \nabla^2 + U}\psi 
$$

[^Lagrangian]: Can you see how the LHS of the Hamilton-Jacobi equation is always the Lagrangian in disguise?