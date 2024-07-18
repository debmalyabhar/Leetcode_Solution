class Solution {
    public int[] twoSum(int[] nums, int target) {
        int x=nums.length;
        for (int i = 0; i < x - 1; i++) {
            for (int j = i + 1; j < x; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j };
                }
            }
        }
         return new int[] {};
    }
}

// class Solution {
// public int[] twoSum(int[] nums, int target) {
// int n = nums.length;
// for (int i = 0; i < n - 1; i++) {
// for (int j = i + 1; j < n; j++) {
// if (nums[i] + nums[j] == target) {
// return new int[]{i, j};
// }
// }
// }
// return new int[]{}; // No solution found
// }
// }