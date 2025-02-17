function findMedianSortedArrays(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    let m = nums1.length;
    let n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // If partitionX is 0 it means nothing is there on left side. Use -Infinity for maxX
        // If partitionX is length of input then there is nothing on right side. Use +Infinity for minX
        let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minX = partitionX === m ? Infinity : nums1[partitionX];

        let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minY = partitionY === n ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // We have partitioned array at correct place
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // We are too far on right side for partitionX. Go on left side.
            high = partitionX - 1;
        } else {
            // We are too far on left side for partitionX. Go on right side.
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not valid.");
}

// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5