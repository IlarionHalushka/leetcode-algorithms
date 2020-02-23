/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return head;

  const dummyHead = new Node();
  dummyHead.next = head;

  const dummyCopy = new Node();
  let copy = new Node(head.val);
  dummyCopy.next = copy;

  const mapIndexNode = new Map();
  mapIndexNode.set(0, copy);

  const mapNodeIndex = new Map();
  mapNodeIndex.set(head, 0);

  let index = 1;

  // copy list without random
  // and save each copied into Map<index, Node>
  // and each current head into Map<Node, index>
  while (head.next) {
    copy.next = new Node(head.next.val);
    mapIndexNode.set(index, copy.next);

    head = head.next;
    mapNodeIndex.set(head, index);
    copy = copy.next;

    index++;
  }

  let newList = dummyCopy.next;
  head = dummyHead.next;

  // copy random
  while (head) {
    newList.random = mapIndexNode.get(mapNodeIndex.get(head.random));
    head = head.next;
    newList = newList.next;
  }

  return dummyCopy.next;
};

// BETTER SOLUTION
// public RandomListNode copyRandomList(RandomListNode head) {
//   if (head == null) return null;
//
//   Map<RandomListNode, RandomListNode> map = new HashMap<RandomListNode, RandomListNode>();
//
//   // loop 1. copy all the nodes
//   RandomListNode node = head;
//   while (node != null) {
//     map.put(node, new RandomListNode(node.label));
//     node = node.next;
//   }
//
//   // loop 2. assign next and random pointers
//   node = head;
//   while (node != null) {
//     map.get(node).next = map.get(node.next);
//     map.get(node).random = map.get(node.random);
//     node = node.next;
//   }
//
//   return map.get(head);
// }
