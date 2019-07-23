class Solution(object):
    def intersection(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        
        s = set()
        intersection = set()
        
        for num in nums1:
            s.add(num)
            
        for num in nums2:
            if num in s:
                if num not in intersection:
                    intersection.add(num)
        
        result = []
        for num in intersection:
            result.append(num)
            
        return result;