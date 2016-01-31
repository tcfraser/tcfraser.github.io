---
layout: post
title: The Pólya Conjecture & 906,150,257
---

As a proper nerd, I find myself dabbling in the realms of [recreational mathematics](https://en.wikipedia.org/wiki/Recreational_mathematics) from time to time. As a result of this, I have very peculiar favorite number, namely $906,150,257$. This number is the spawn of the Pólya Conjecture, which was first posited by George Pólya in 1919. I am so found of this particular number because it belongs to one of the few unique cases where large numbers have interesting properties. For more, see [Sloane's Gap (PDF)](http://arxiv.org/pdf/1101.4470.pdf).

<!--more-->

## The Liouville Function

This conjecture concerns itself with prime factorizations of numbers. For example the number $15$ has prime factorization $15 = 3 \cdot 5$. More specifically, the conjecture concerns itself with the number of prime factors (including duplicates) of a given number $k$. For the purposes of this post, the amount of prime factors a number has will be given by $\rho(k)$. This naturally leads to the [Liouville function](http://mathworld.wolfram.com/LiouvilleFunction.html) $\lambda(k)$, which characterizes the parity (oddness or evenness) of $\rho(k)$. The Liouville function is $-1$ if there are an odd amount of prime factors of $k$ and $1$ otherwise.


$$
\lambda(k) = \br{-1}^{\rho(k)} = \begin{cases} -1 & \rho(k) \text{ is odd} \\1 & \rho(k) \text{ is even} \end{cases}
$$

Evaluating the Liouville Function is easy, I encourage the reader to try a couple to convince yourself.

| $k$             | Prime Factors of $k$ | $\rho(k)$  | $\lambda(k)$    |
|:---------------:|:---------------:|:---------------:|:---------------:|
| $1$             | None            | $0$             | $+1$            |
| $2$             | $2$             | $1$             | $-1$            |
| $3$             | $3$             | $1$             | $-1$            |
| $4$             | $2\cdot 2$      | $2$             | $+1$            |
| $5$             | $5$             | $1$             | $-1$            |
| $6$             | $2\cdot 3$      | $2$             | $+1$            |
| $\cdots$        | $\cdots$        | $\cdots$        | $\cdots$        |
| $2122$ | $2\cdot1061$ | $2$ | $+1$ |
| $16028$ | $2^2\cdot4007$ | $3$ | $-1$ |
| $17436$ | $2^2\cdot3\cdot1453$ | $4$ | $+1$ |
| $37377$ | $3^2\cdot4153$ | $3$ | $-1$ |
| $41121$ | $3^3\cdot1523$ | $4$ | $+1$ |
| $46523$ | $46523$ | $1$ | $-1$ |
| $57458$ | $2\cdot28729$ | $2$ | $+1$ |
| $60569$ | $37\cdot1637$ | $2$ | $+1$ |
| $67398$ | $2\cdot3\cdot47\cdot239$ | $4$ | $+1$ |
| $74810$ | $2\cdot5\cdot7481$ | $3$ | $-1$ |
| $78318$ | $2\cdot3^2\cdot19\cdot229$ | $5$ | $-1$ |
| $79179$ | $3\cdot26393$ | $2$ | $+1$ |
| $86528$ | $2^9\cdot13^2$ | $11$ | $-1$ |
| $92432$ | $2^4\cdot53\cdot109$ | $6$ | $+1$ |
| $96233$ | $96233$ | $1$ | $-1$ |

## The Pólya Conjecture

Although not clear from this table, George Pólya noticed something *strange* about $\lambda(k)$. He noticed an interested asymmetry to the values of $\lambda(k)$. Seemingly, $\lambda(k)$ equals $-1$ more often than it does $+1$. This indicates that there are *more* numbers with an odd number of prime factors than numbers with an even number of prime factors. Pólya conjectured that this was always true, no matter how many numbers he considered. Stating this conjecture formally, for $T(n)$ defined to be the sum of the Liouville function,

$$ T(n) = \sum_{k=1}^{n} \lambda(k) $$

Where $T(n)$ is count of the amount of numbers *less than or equal* to $n$ with an *even* number of prime factors. The Pólya conjecture states that $T(n)$ is *always* less than zero (except for n=1), or that there is always a majority of numbers with an odd amount of prime factors.

$$ T(n) \leq 0 , \forall n > 1$$

This conjecture is perfectly reasonable. Checking every number up to $n = 1,000,000$ and you can see that that $T(n)$ remains negative and has somewhat of a downward trend. 

![T(n) for n = 100](https://raw.githubusercontent.com/tcfraser/polya-conjecture/master/figures/100_low_res.png)
![T(n) for n = 10000](https://raw.githubusercontent.com/tcfraser/polya-conjecture/master/figures/10000_low_res.png)
![T(n) for n = 1000000](https://raw.githubusercontent.com/tcfraser/polya-conjecture/master/figures/1000000_low_res.png)

You can get higher resolutions of these plots as well as the code used to generate them [here](https://github.com/tcfraser/polya-conjecture).

## My Favorite Number

So how does $906,150,257$ play into all this? Well for nearly 40 years no one knew if the Pólya conjecture was true or not. It wasn't until 1958 when Colin Haselgrove managed to [prove](http://journals.cambridge.org/download.php?file=%2FMTK%2FMTK5_02%2FS0025579300001480a.pdf&code=c6fe3e67f20544f7533e435a6523a1b7)[^free] that there must exist a counterexample. He did this using the [Dirichlet series](https://en.wikipedia.org/wiki/Dirichlet_series) representation of the Liouville function of the form

$$ \f{\zeta(2s)}{\zeta(s)} = \sum_{n=1}^{\infty} \f{\lambda(n)}{n^s}  $$

Where $\zeta(s)$ is the [Riemann zeta function](https://en.wikipedia.org/wiki/Riemann_zeta_function).

Furthermore, Minoru Tanaka found the **smallest** counterexample to the Pólya conjecture, namely $906,150,257$. What this means is that $906,150,257$ is the first number where there are more than $50\%$ of numbers less than it with an even amount of prime factors.

## YouTube Video 

I have been fascinated with the Pólya conjecture for a few years now. If you want more, I made a YouTube video in 2014 for the [Humber Math Centre](http://www.humber.ca/liberalarts/math-centre) about my favorite number. You can check it out [here](https://www.youtube.com/watch?v=rUljyleRm4g).

[^free]: Sorry, this paper used to be free.