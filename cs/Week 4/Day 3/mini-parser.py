class Solution(object):
    def deserialize(self, s):
        """
        :type s: str
        :rtype: NestedInteger
        """
        def deserialize(value):
            if len(value) == 0:
                return NestedInteger()
            if value[0] != '[':
                return NestedInteger(int(value))
            if value[1] == ']':
                return NestedInteger()
            result = NestedInteger()
            temp = ""
            for i in range(1, len(value) - 1):
                if value[i] != ',' and i != len(value) - 2:
                    temp += value[i]
                else:
                    result.getList().append(deserialize(temp))
                    temp = ""
        return deserialize(s)
