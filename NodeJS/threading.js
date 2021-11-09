 thread in simple terms is basically a set of programming instructions that can be run independently in a computer’s processor 
 and every process that we want to run has its own thread to run the programming instructions and the process can have more than one thread. 

 Node.js application runs only on a single thread and whether that Node.js application is being used by 5 users or 5 million users, 
 it will only run on a single thread

// as node is single threaded, but we can achieve multithreading in it

// threads package can be used 
import { spawn, Thread, Worker } from "threads"

// you can create child processes and then your parent process can watch the child processes and maybe force kill all if anything 
// wrong found. Basically full control
const { spawn } = require('child_process');