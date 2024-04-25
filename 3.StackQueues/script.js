function findBalancedParenthesis(parenthesis) {
    const stack = new Stack();
    for(const p of parenthesis) {
        if(p === "(") {
            return stack.push(p);
        } else if(p === ")") {
            if(stack.isEmpty() || stack.pop() !== "(") {
                return false;
            }
        }
        return stack.isEmpty();
    }
}

function reverseString(string) {
    const stack = new Stack();
    let reversedString = "";
    for(const s of string) {
        stack.push(s);
    }
    while(!stack.isEmpty()) {
        reversedString += stack.pop();
    }
}