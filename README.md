isPrime
=======

Check whether a number is prime number or not

Usage
=======
You just need to include isPrime.js under src folder to your project.

isPrime(2); // true

isPrime(963); // false

isPrime(1000); // false

isPrime(7919); // true

Tests
=======
Run SpecRunner.html

How it works
=======
A composite n (opposite of prime) must have a divisor lesser than sqrt(n),because it can be expressed as n = h*k for some intergers h and k. If h is greater than sqrt(n), then k must be smaller than sqrt(n);

All primes are of the form 6k ± 1, with the exception of 2 and 3. This is because all integers can be expressed as (6k + i) for some integer k and for i = −1, 0, 1, 2, 3, or 4; 2 divides (6k + 0), (6k + 2), (6k + 4); and 3 divides (6k + 3).

