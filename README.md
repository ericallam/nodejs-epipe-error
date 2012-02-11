### Code to demonstrate the EPIPE exception:

I have no idea why this `EPIPE` error is getting raised, or how to fix it.

I'm spawning a child process using spawn `child.js` which just listens on
`stdin` and when `stdin` is closed, it will write to `stdout` to pass information back to the 
parent process.

The parent process (in `cli.js`) spawns the `child.js` script using `spawn`, and then
logs the exit code on the child process.
