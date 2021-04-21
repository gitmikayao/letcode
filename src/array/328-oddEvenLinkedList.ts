/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 class ListNode {
     val;
     next;
    constructor(val:any,next:ListNode){
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 export const oddEvenList = function(head:ListNode) {
    if(!head || !head.next){
        return head;
    }
    
    let num = 1;
    let cur = head.next;
    let prev = head.next;
    let oddTail = head;
    const EvenHead = head.next;
    while (prev.next) {
        num++;
        if (num % 2) {
            oddTail.next = cur;
            prev.next = cur.next;
            cur.next = EvenHead
            cur = prev.next;
            oddTail = oddTail.next;
        } else {
            prev = cur;
            cur = prev.next;
        }
    }

    return head;
};



