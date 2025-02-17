# web-worker-example
 This repo contains a practical for web workers using JS

# 🚀 What is the web worker?
JavaScript typically runs on a single thread, which can cause the main program to become unresponsive while performing complex calculations. So, there should be a solution to that.
We can use webworkers. 
# 🔧 How Do Web Workers Work?
If our main JS program has a complex calculation or time-consuming work, we can assign it to a separate thread. This will avoid interrupting the main program.  
⚠️ Note: Web Workers cannot directly modify the DOM.
# 📌 Features  
✅ Run JavaScript in the background  
✅ Prevent UI freezing  
✅ Communicate with the main thread via postMessage()  
✅ Works well for CPU-intensive tasks
