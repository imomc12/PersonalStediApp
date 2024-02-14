// hello.test.js

// Import the necessary modules
const helloWorld = require('./helloworld');

// Test case for the hello world function
test('Returns correct greeting', () => {
    // Call the function
    const result = helloWorld.sayHello();

    // Define the expected outcome
    const expectedGreeting = "Hello Max";

    // Verify that the result matches the expected outcome
    expect(result).toBe(expectedGreeting);
});
