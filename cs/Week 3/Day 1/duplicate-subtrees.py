class Solution(object):
    def findDuplicateSubtrees(self, root):
        """
        :type root: TreeNode
        :rtype: List[TreeNode]
        """
        
        def findDuplicateSubtrees(node, table):
            if (node):
                if (node.val != None):
                    value = chr(node.val)
                    value += findDuplicateSubtrees(node.left, table)
                    value += findDuplicateSubtrees(node.right, table)
                    if value in table:
                        table[value] += 1
                    else:
                        table[value] = 0
            else:
                return ""
        
        t = {}
        findDuplicateSubtrees(root, t)
        
        result = []
        for key in t:
            if t[key] > 0:
                result.append(t[key])
                
        return result
