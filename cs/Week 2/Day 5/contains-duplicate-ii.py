    def containsNearbyDuplicate(self, nums, k):
3
        """
4
        :type nums: List[int]
5
        :type k: int
6
        :rtype: bool
7
        """
8
        
9
        table = set()
10
        start = 0
11
        
12
        for i in range(len(nums)):
13
            if nums[i] in table:
14
                return True
15
            else:
16
                table.add(nums[i])
17
            if i - start == k:
18
                table.remove(nums[start])
19
                start += 1
20
        return False
