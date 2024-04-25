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



// WRITE THE REVERSESTRING FUNCTION HERE //
//                                       //
//                                       //
//                                       //
//                                       //
///////////////////////////////////////////
function reverseString(string){
    const stack = new Stack();
    let reversedString = "";
    for(const s of string){
        stack.push(s);
    }
    while(!stack.isEmpty()){
        reversedString += stack.pop();
    }
    return reversedString;
}


const input1 = "Hello, World!";
const expected1 = "!dlroW ,olleH";
const result1 = reverseString(input1);
console.log(`Input: "${input1}" | Expected: "${expected1}" | Result: "${result1}"`);

const input2 = "abcd";
const expected2 = "dcba";
const result2 = reverseString(input2);
console.log(`Input: "${input2}" | Expected: "${expected2}" | Result: "${result2}"`);

const input3 = "12345";
const expected3 = "54321";
const result3 = reverseString(input3);
console.log(`Input: "${input3}" | Expected: "${expected3}" | Result: "${result3}"`);

const input4 = "";
const expected4 = "";
const result4 = reverseString(input4);
console.log(`Input: "${input4}" | Expected: "${expected4}" | Result: "${result4}"`);


/*
    EXPECTED OUTPUT:
    ----------------
    Input: "Hello, World!" | Expected: "!dlroW ,olleH" | Result: "!dlroW ,olleH"
    Input: "abcd" | Expected: "dcba" | Result: "dcba"
    Input: "12345" | Expected: "54321" | Result: "54321"
    Input: "" | Expected: "" | Result: ""

*/


/*

GPT4-Turbo explanation
Understanding the reverseString Function Using a Stack

To understand how the reverseString function works, let's break down the process step-by-step, using the provided Stack class and the reverseString function itself.

Step 1: Initializing the Stack

    A new instance of the Stack class is created. This stack will be used to temporarily hold the characters of the input string.

    const stack = new Stack();


Step 2: Pushing Characters to the Stack

    The function iterates over each character of the input string and pushes each character onto the stack. This is done using the push method of the Stack class.

    for(const s of string){
        stack.push(s);
    }


Step 3: Popping Characters from the Stack

    An empty string reversedString is initialized to collect the characters in reverse order.
    The function then enters a loop that continues until the stack is empty (stack.isEmpty() returns false).
    Inside the loop, characters are popped from the stack (using the pop method) and concatenated to reversedString. Since the stack is a Last In First Out (LIFO) data structure, characters are popped in the reverse order of how they were pushed.

    while(!stack.isEmpty()){
        reversedString += stack.pop();
    }


Step 4: Returning the Reversed String

    After the loop completes (when the stack is empty), the reversedString now contains the characters of the original string in reverse order. This reversed string is then returned as the output of the function.

    return reversedString;


Example Execution

    For an input string "Hello, World!", the characters are pushed onto the stack in the order H, e, l, l, o, ,, , W, o, r, l, d, !.
    They are then popped from the stack in the reverse order: !, d, l, r, o, W, , ,, o, l, l, e, H.
    The reversedString thus becomes "!dlroW ,olleH", which is returned by the function.


This method effectively uses the stack's LIFO behavior to reverse the sequence of characters in the string, demonstrating a practical application of stack data structures in solving common programming problems like string reversal.

*/