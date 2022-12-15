/*
Reverse Linked List
単一リンクリストの先頭が与えられたら，リストを反転し，反転後のリストを返す。

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null

    while (head) {
      [head.next, prev, head] = [prev, head, head.next]
    }
    return prev
}