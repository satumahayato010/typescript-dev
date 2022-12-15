/*
Merge Two Sorted Lists
2つのソートされたリンクリスト list1 と list2 の先頭が与えられる．
この2つのリストを1つのソートされたリストに統合せよ。
このリストは最初の2つのリストのノードをつなぎ合わせて作らなければならない。
マージされたリンクリストの先頭を返せ。

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null):
    ListNode | null {

    let res = new ListNode()
    let cur = res

    while (list1 || list2) {
        if (list1 === null) {
            cur.next = list2
            list2 = null
            continue
        }
        if (list2 === null) {
            cur.next = list1
            list1 = null
            continue
        }
        if (list1.val > list2.val) {
            cur.next = list2
            cur = cur.next
            list2 = list2.next
        } else {
            cur.next = list1
            cur = cur.next
            list1 = list1.next
        }
    }
    return res.next
}