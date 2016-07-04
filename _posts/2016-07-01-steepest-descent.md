---
layout: post
title: Steepest-Descent Approximation
latex: mathjax
---
<div class='mathjax-macros'>
    $$\renewcommand{\vec}[1]{\mathbf{#1}}$$    
</div>
Steepest-Descent Approximation is an integral approximation technique aimed at integrals of the form $I = \int_{\R^n} \dif \vec{x} g\br{\vec{x}} e^{\la f\br{\vec{x}}}$ in the limit of $\la \to \infty$. It has applications in Quantum Field Theory and optimization theory.
<!--more-->

## Multivariate Taylor's Approximation
Given a multivariate, real-valued function $f : \R^n \to \R$ that is $k+1$ times differentiable, $f \in \C^{k+1}$, one can approximate $f(\vec{x})$ nearby the point $\vec{a}$ using a Multivariate Taylor's Approximation[^mvta],

$$
f\br{\vec{x}} = \sum_{\abs{\al} \leq k} \f{\di^\al f\br{\vec{a}}}{\al!} \br{\vec{x} - \vec{a}}^\al + R_{\al, k} \br{\vec{x} - \vec{a}}
$$

Where $\al$ is a multi-index $\al = \br{\al_1, \ldots, \al_n}$ with $\abs{\al} = \sum_i \al_i, \al! = \prod_i \al_i!$. The remainder term scales as $R_{\al, k} \br{\vec{x} - \vec{a}} = \mathcal{O}\br{\abs{\vec{x} - \vec{a}}^{k+1}}$.

For our purposes, if $f \in \C^{3}$ it can be approximated up to *quadratic* terms where $\al$ is summed over $3$ possibilities $\abs{\al} = 0, 1, 2$,

$$
f\br{\vec{x}} = f\br{\vec{a}} + \di_i f\br{\vec{a}}\br{x^i- a^i} + \f12 \di_j\di_i f\br{\vec{a}}\br{x^j- a^j}\br{x^i- a^i} + \cdots
$$

Where the repeated indices indicate sums over $i,j \in \bc{1, \ldots, n}$. More compactly written with $\vec{h} = \vec{x} - \vec{a}$,

$$
f\br{\vec{a} + \vec{h}} = f\br{\vec{a}} + \di_i f\br{\vec{a}}h^i + \f12 \di_j\di_i f\br{\vec{a}}h^jh^i + \mathcal{O}\br{\abs{\vec{h}}^3}
$$

## Maximum of $f$ and $\la \to \infty$

Notice that in the integrand of $I$, if $f$ has a global maximum at $\vec{a} \in \R^n$ and $\la$ becomes very large, then the exponential $e^{\la f\br{\vec{x}}}$ term contributes to the total value of the integral the most in regions nearby $\vec{a}$[^lasign]. 

At the maximum $\vec{a}$, $\di_i f\br{\vec{a}}$ vanishes and the integral can be approximated up to a quadratic expansion,

$$
I = \int_{\R^n} \dif \vec{x} g\br{\vec{x}} e^{\la f\br{\vec{a}}} e^{\la \f12 \di_j\di_i f\br{\vec{a}}h^jh^i}e^{\mathcal{O}\br{\la \abs{\vec{h}}^3}}
$$

## Asymptotics and Convergence

At this point, the integral is fairly difficult. Namely, the asymptotic $\mathcal{O}\br{\la \abs{\vec{h}}^3}$ is causing trouble. There are too competing limits that permit these approximations,

$$
\la \to \infty
$$

$$
\vec{x} \to \vec{a} \text{ or } \vec{h} \to \vec{0}
$$

Taylor's Remainder theorem determines the cubic behaviour in $\abs{\vec{h}}$ with coefficients dictated by some point $\vec{c}$ affinely between $\vec{x}$ and $\vec{a}$. In order to keep the asymptotic convergent, $\abs{\vec{h}}^3$ needs to go to zero *faster* than $\la$ goes to infinity.

There are many ways to do this. One intuitive way is to allow $\la$ to scale as,

$$
\mathcal{O}\br{\abs{\vec{h}}^2} = \mathcal{O}\br{\la^{-1}}
$$

This is the *choice* Zee makes[^zee]. Other references[^pp][^mit] end up with similar expresses due to rather convoluted motivations. All choices that have $\mathcal{O}\br{\la \abs{\vec{h}}^3} \to 0$ are valid (see eq. 8 on [Wikipedia](https://en.wikipedia.org/wiki/Method_of_steepest_descent) which makes a different choice); the important part is that the scaling is *independent* of $\vec{x}$. This part is critical.

Pulling constants out of the integral gives,

$$
I = e^{\la f\br{\vec{a}}} e^{\mathcal{O}\br{\la^{-1/2}}} \int_{\R^n} \dif \vec{x} g\br{\vec{x}} e^{\la \f12 \di_j\di_i f\br{\vec{a}}h^jh^i}
$$

To deal with $g\br{\vec{x}}$, re-use the fact that the integrand is dominant in regions where $\vec{x}$ is neat $\vec{a}$. Even though $\vec{a}$ is a not a maximum of $g$, simply perform a zeroth order approximation,

$$
\begin{align}
g\br{\vec{x}} &= g\br{\vec{a}} + \di_i g\br{\vec{a}}h^i + \ldots \\
&= g\br{\vec{a}} + \mathcal{O}\br{\abs{\vec{h}}} \\
&= g\br{\vec{a}} + \mathcal{O}\br{\la^{-1/2}}
\end{align}
$$

Therefore, the integral $I$ becomes even simpler. The entirety of $g\br{x}$ can be treated as a constant,

$$
I = e^{\la f\br{\vec{a}}} e^{\mathcal{O}\br{\la^{-1/2}}}\br{g\br{\vec{a}} + \mathcal{O}\br{\la^{-1/2}}} \int_{\R^n} \dif \vec{x} e^{\la \f12 \di_j\di_i f\br{\vec{a}}h^jh^i}
$$

One could merge the asymptotics as this point, however in cases where $g\br{\vec{x}}$ is unity everywhere, the total asymptotic is different. Keeping the terms separated allows one to discard the relevant parts later. In principle one could write,

$$
e^{\mathcal{O}\br{\la^{-1/2}}}\br{g\br{\vec{a}} + \mathcal{O}\br{\la^{-1/2}}} = g\br{\vec{a}} + \mathcal{O}\br{\la^{-1/2}}
$$

Instead, choose to omit it this as to illuminate the different contributions.

## Generalized Gaussian & Orthogonal Transform

All that remains is guassian-like integral,

$$
I_G = \int_{\R^n} \dif \vec{x} e^{\la \f12 \di_j\di_i f\br{\vec{a}}h^jh^i}
$$

Just to clean things up slightly, remark that the integral is over all of $\R^n$ and the measure $\dif \vec{x}$ is invariant under translations, one can use a change of coordinates $\vec{x} \to \vec{x} - \vec{a} = \vec{h}$ to arrive at,

$$
I_G = \int_{\R^n} \dif \vec{h} e^{\la \f12 \di_j\di_i f\br{\vec{a}}h^jh^i}
$$

Recall that a [Gaussian integral](http://mathworld.wolfram.com/GaussianIntegral.html) over $\R$ is of the form,

$$
\int_\R \dif z e^{-\f12 \ga z^2} = \br{\f{2\pi}{\ga}}^{\f12}
$$

In our example, $-\di_j\di_i f\br{\vec{a}}$ takes the role of a constant $\ga$. Notice that $\di_j\di_i f\br{\vec{a}}$ forms a $n\times n$ matrix called the [Hessian Matrix](https://en.wikipedia.org/wiki/Hessian_matrix). Since $f$ has been stipulated to be in class $C^2$, the Hessian matrix is real and symmetric,

$$
F_{ij} = \di_j\di_i f\br{\vec{a}} = \di_i\di_j f\br{\vec{a}}
$$

As a consequence, it can be diagonalized by an orthogonal matrix $\Pi$.

$$
\Pi^T F \Pi = D \qquad {\Pi_{k}}^i F_{ij} {\Pi^{j}}_k = D_{kk}
$$

Therefore suggesting a change of coordinates $z^i = {\Pi^i}_j h^j$ such that,

$$
\di_j\di_i f\br{\vec{a}} h^i h^j = \di_j\di_i f\br{\vec{a}} {\Pi^{j}}_k z^k {\Pi^{i}}_k z^k = D_{kk} z^k z^k
$$

And the integral becomes,

$$
I_G = \int_{\R^n} \dif \vec{z} e^{\la \f12 D_{kk} z^k z^k}
$$

The integral $I_G$ is now separable into $n$ individual Gaussian integrals; one for each $z_i$. Let $d_{ii} \in \R$ be the $i$-th eigenvalue of $F$ and thus the $i$-th entry of $D$.

$$
I_G = \prod_{i=1}^{n} \int_{\R} \dif z^i e^{\la \f12 d_{ii} \br{z^i}^2}
$$

To match the form of a Gaussian integral, one should note the sign of $d_{ii}$. Recall that $\vec{a}$ was a maximum of $f$ (and not a saddle point). Consequently, $\di_j\di_i f\br{\vec{a}}$ is negative-definite matrix,

$$
\di_j\di_i f\br{\vec{a}} \leq 0
$$

Making all of it's eigenvalues negative. Writing $d_{ii} = -\br{-d_{ii}}$,

$$
I_G = \prod_{i=1}^{n} \br{\f{2\pi}{-\la d_{ii}}}^{\f12} = \br{\f{-2\pi}{\la}}^{\f{n}{2}} \f{1}{\sqrt{\det\br{\di_j\di_i f\br{\vec{a}}}}}
$$

## The Steepest-Descent Approximation

In it's final form, the Steepest-Descent Approximation can be written as,

$$
I = e^{\la f\br{\vec{a}}} e^{\mathcal{O}\br{\la^{-1/2}}}\br{g\br{\vec{a}} + \mathcal{O}\br{\la^{-1/2}}} \f{\br{-2\pi\la^{-1}}^{\f{n}{2}}}{\sqrt{\det\br{\di_j\di_i f\br{\vec{a}}}}}
$$

More commonly written without the asymptotic scalings,

$$
I \approx g\br{\vec{a}} e^{\la f\br{\vec{a}}} \f{\br{-2\pi\la^{-1}}^{\f{n}{2}}}{\sqrt{\det\br{\di_j\di_i f\br{\vec{a}}}}} \quad \la \to \infty
$$


[^mvta]: G. B. Folland, [Higher-Order Derivatives and Taylor’s Formula in Several Variables](https://www.math.washington.edu/~folland/Math425/taylor2.pdf)
[^lasign]: Obviously this only holds for $\la > 0$. If $\la < 0$, simply absorb the sign of $\la$ into $f$ and proceed onward.
[^zee]: Anthony Zee, Quantum Field Theory in a Nutshell, 2nd edition (Princeton University Press, 2010) – Chapter I.2, Appendix 3.
[^pp]: Physics Pages, [Steepest descent and the classical limit of quantum mechanics](http://www.physicspages.com/tag/steepest-descent/)
[^mit]: [Mathematical Ideas and Notions of Quantum Field Theory](http://ocw.mit.edu/courses/mathematics/18-238-geometry-and-quantum-field-theory-fall-2002/lecture-notes/sec2.pdf)