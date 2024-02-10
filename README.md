## Easing function

- Ease In:

$$
\boxed{
    \begin{align*}
        \underset{x:\: 0 \to 1}{f_{in}(x)} &= f(x)
    \end{align*}
}
$$

- Ease Out:

$$
\boxed{
    \begin{align*}
        \underset{x:\: 0 \to 1}{f_{out}(x)}
            &= 1 - f_{in}(1 - x)\\
            &= 1 - f(1 - x)
    \end{align*}
}
$$

- Ease In Out:

$$
\boxed{
    \begin{align*}
        \underset{x:\: 0 \to 1}{f_{inout}(x)}
            &= \begin{cases}
                \frac{f_{in}(2x)}{2} &{\text{if }} x < \frac{1}{2}\\
                \frac{f_{out}(2x - 1) + 1}{2} &{\text{if }} x \geq \frac{1}{2}
            \end{cases}\\
            &= \begin{cases}
                \frac{f(2x)}{2} &{\text{if }} x < \frac{1}{2}\\
                1 - \frac{f(2 - 2x) }{2} &{\text{if }} x \geq \frac{1}{2}
            \end{cases}
    \end{align*}
}
$$

- Ease Out In:

$$
\boxed{
    \begin{align*}
        \underset{x:\: 0 \to 1}{f_{outin}(x)}
            &= \begin{cases}
                \frac{f_{out}(2x)}{2} &{\text{if }} x < \frac{1}{2}\\
                \frac{f_{in}(2x - 1) + 1}{2} &{\text{if }} x \geq \frac{1}{2}
            \end{cases}\\
            &= \begin{cases}
                \frac{1 - f(1 - 2x)}{2} &{\text{if }} x < \frac{1}{2}\\
                \frac{1 + f(2x - 1)}{2} &{\text{if }} x \geq \frac{1}{2}
            \end{cases}
    \end{align*}
}
$$
