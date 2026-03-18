const p1 = Promise.resolve("First success");
const p2 = Promise.reject("Second failed");
const p3 = Promise.resolve("Third success");

Promise.all([p1, p2, p3])
  .then(results => console.log("Results:", results))
  .catch(error => console.error("Error:", error));

Promise.race()
Promise.allSettled()
Promise.any()