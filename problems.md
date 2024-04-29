# LL:

    pop 						---------- temp part
    insert 					------- false true
    hasLoop 							------- true false
    removeDuplicates 							---------- curr = curr.next

# DLL:

    push 								--------- use !this.head when empty instead of this.length === 0
    get  (priority)								---------- no need of Math.floor and temp = this.tail instead of temp = temp.prev
    insert						---------- just practice more; order doesn't matter but should be calling before/after

# Stack:

    constructor 						-------- this.next instead of this.top in Node class

# Queue:

    constructor 					-------- this.next instead of this.first and this.last

    isBalancedParentheses				 ---------------- stack.pop() !== '(' issue in else statement

# BST:

    insert 		------------ this.root instead of this.head and not return false/true anything if no right left match
    contains(priority)						---------- false when tree empty and after while statement when it doesn't return true
    minValue 			---------- node and current so everything
