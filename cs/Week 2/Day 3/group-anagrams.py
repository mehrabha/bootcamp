class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        
        def calculateKey(s):
            result = 0
            for char in s:
                result += ord(char)
            return result
        
        keys = {}
        for s in strs:
            key = calculateKey(s)
            if key in keys:
                keys[key].append(s)
            else:
                keys[key] = [s]
        
        result = []
        for l in keys:
            result.append(keys[l])
            
        return result