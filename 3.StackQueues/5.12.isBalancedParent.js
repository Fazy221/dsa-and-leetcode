class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }
}

// WRITE THE ISBALANCEDPARENTHESES FUNCTION HERE //
//                                               //
//                                               //
//                                               //
//                                               //
///////////////////////////////////////////////////

function isBalancedParentheses(parenthesis) {
  const stack = new Stack();
  for (const p of parenthesis) {
    if (p === "(") {
      this.push(p);
    } else if (p === ")") {
      if (stack.isEmpty() || stack.pop() !== "(") return false;
    }
  }
  return stack.isEmpty();
}

const input1 = "(())";
const expected1 = true;
const result1 = isBalancedParentheses(input1);
console.log(`Input: "${input1}" | Expected: ${expected1} | Result: ${result1}`);

const input2 = "(()))";
const expected2 = false;
const result2 = isBalancedParentheses(input2);
console.log(`Input: "${input2}" | Expected: ${expected2} | Result: ${result2}`);

const input3 = "((()))";
const expected3 = true;
const result3 = isBalancedParentheses(input3);
console.log(`Input: "${input3}" | Expected: ${expected3} | Result: ${result3}`);

const input4 = "(((())";
const expected4 = false;
const result4 = isBalancedParentheses(input4);
console.log(`Input: "${input4}" | Expected: ${expected4} | Result: ${result4}`);

/*
    EXPECTED OUTPUT:
    ----------------
    Input: "(())" | Expected: true | Result: true
    Input: "(()))" | Expected: false | Result: false
    Input: "((()))" | Expected: true | Result: true
    Input: "(((())" | Expected: false | Result: false

*/

/* 
GPT4-Turbo explanation
The isBalancedParentheses function checks if a string consisting of parentheses is balanced—that is, each opening parenthesis ( has a corresponding closing parenthesis ) in the correct order. It uses a Stack class to help manage the parentheses. Let’s explore how this function operates step-by-step.

Step 1: Initializing the Stack

    At the beginning of the function, a new instance of the Stack class is created to store the characters during the processing of the input string.

    const stack = new Stack();


Step 2: Iterating Through the String

    The function iterates over each character in the input string of parentheses.

    for (const p of parentheses) {


Step 3: Handling Opening Parentheses

    If the current character is an opening parenthesis (, it is pushed onto the stack. This step keeps track of each unmatched opening parenthesis.

    if (p === "(") {
        stack.push(p);
    }


Step 4: Handling Closing Parentheses

    If the current character is a closing parenthesis ), the function performs a couple of checks:
        First, it checks if the stack is empty. An empty stack at this point would mean there is no corresponding opening parenthesis for this closing parenthesis, indicating unbalanced parentheses.
        Second, if not empty, it pops the top of the stack (which should ideally be an opening parenthesis). If the popped character is not (, or if the stack was empty, it indicates a mismatch or an imbalance.

    else if (p === ")") {
        if (stack.isEmpty() || stack.pop() !== "(") {
            return false;
        }
    }


Step 5: Final Check for Unmatched Opening Parentheses

    After processing all characters, the function checks if the stack is empty. An empty stack means every opening parenthesis had a matching closing parenthesis. A non-empty stack indicates there are unmatched opening parentheses left, hence unbalanced.

    return stack.isEmpty();


Example Execution

    For an input string "(())", the characters are processed as follows:
        The first character ( is pushed onto the stack.
        The second character ( is also pushed onto the stack.
        The third character ) causes the last ( to be popped (matched successfully).
        The fourth character ) causes the remaining ( to be popped (matched successfully).
        The stack is empty at the end, indicating the parentheses are balanced, so the function returns true.


This method proficiently uses the stack's LIFO behavior to track and match pairs of parentheses, providing an efficient solution to the common problem of checking for balanced parentheses in programming and parsing scenarios.

*/