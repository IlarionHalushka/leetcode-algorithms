class Solution:
    # @param A : list of integers
    # @return a list of integers
    def equal(self, A):
        n = len(A)
        nums = {}
        d = []
        for i in range(n-1):
            for j in range(i+1, n):
                a = A[i] + A[j]
                if a in nums.keys():
                    d.append([nums[a][0], nums[a][1], i, j])
                else:
                    nums[a] = [i,j]
        d.sort()
        for i in range(len(d)):
            if d[i][0] < d[i][1] and d[i][2] < d[i][3] and d[i][1] < d[i][3] and d[i][0]!=d[i][2] and d[i][1]!=d[i][2]:
                return d[i]
