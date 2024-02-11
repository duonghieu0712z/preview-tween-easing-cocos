## Easing function

- Ease In:

$$
\begin{align*}
    \underset{x: 0 \to 1}{f_{in}(x)} &= f(x)
\end{align*}
$$

- Ease Out:

$$
\begin{align*}
    \underset{x: 0 \to 1}{f_{out}(x)}
        &= 1 - f_{in}(1 - x)\\
        &= 1 - f(1 - x)
\end{align*}
$$

- Ease In Out:

$$
\begin{align*}
    \underset{x: 0 \to 1}{f_{inout}(x)}
        &= \begin{dcases}
            \frac{f_{in}(2x)}{2} &{\text{if }} x < \frac{1}{2}\\
            \frac{f_{out}(2x - 1) + 1}{2} &{\text{if }} x \geq \frac{1}{2}
        \end{dcases}\\
        &= \begin{dcases}
            \frac{f(2x)}{2} &{\text{if }} x < \frac{1}{2}\\
            1 - \frac{f(2 - 2x) }{2} &{\text{if }} x \geq \frac{1}{2}
        \end{dcases}
\end{align*}
$$

- Ease Out In:

$$
\begin{align*}
    \underset{x: 0 \to 1}{f_{outin}(x)}
        &= \begin{dcases}
            \frac{f_{out}(2x)}{2} &{\text{if }} x < \frac{1}{2}\\
            \frac{f_{in}(2x - 1) + 1}{2} &{\text{if }} x \geq \frac{1}{2}
        \end{dcases}\\
        &= \begin{dcases}
            \frac{1 - f(1 - 2x)}{2} &{\text{if }} x < \frac{1}{2}\\
            \frac{1 + f(2x - 1)}{2} &{\text{if }} x \geq \frac{1}{2}
        \end{dcases}
\end{align*}
$$
