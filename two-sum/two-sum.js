/*
Specification
input:
	- nums number[]
	- target number
output
	- number[]
constraints:
	- 2 <= nums.length <= 104
	- -109 <= nums[i] <= 109
	- -109 <= target <= 109
	- Only one valid answer exists.
edge-cases:
?

Justification:
find the index of two numbers in nums that add up to target

Explanation:
target determines what two indexes from nums is returned

Visualization:
input [2,7,11,15], 9

[2,7,11,15] => 2 + 7 => 9 (return [0, 1]) DONE
 i j
input [3,2,4], 6
[3,2,4] => 3 + 2 => 5 => 5 != 6 (continue)
 i j
[3,2,4] => 3 + 4 => 7 => 7 != 6 (continue)
 i   j
[3,2,4] => 2 + 4 => 6 => 6 == 6 (return [1, 3])
	 i j

Approximation:
for i=0 in nums.len - 1:
	for j=i+1 in nums:
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue

Verification:
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1: <--
	for j=i+1 in nums:
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue

i=0
(i => 0) < (nums.len => 3) ? True (enter loop)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums: <--
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue

i=0, j=((i=>0) + 1) => 1
(j => 1) < (nums.len => 3) ? True (enter loop)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums:
		if nums[i] + nums[j] == target: <--
			return [i, j]
		else:
			continue

i=0, j=1
(
	(nums[i => 0] => 3) +
	(nums[j => 1] => 2)
) => 5 == (target => 6) ? False (continue)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums: <--
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue

i=0, j=j+1=>2
(j => 2) < (nums.len => 3) ? True (enter loop)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums:
		if nums[i] + nums[j] == target: <--
			return [i, j]
		else:
			continue

i=0, j=2
(
	(nums[i => 0] => 3) +
	(nums[j => 2] => 4)
) => 7 == (target => 6) ? False (continue)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums: <--
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue

i=0, j=j+1=>3
(j=>3) < (nums.len => 3) False (escape loop)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1: <--
	for j=i+1 in nums:
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue

i=i+1=>1
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums: <--
		if nums[i] + nums[j] == target:
			return [i, j]
		else:
			continue
i=1
j=(i=>1)+1=>2
j > (nums.len => 3) ? True (enter loop)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums:
		if nums[i] + nums[j] == target: <--
			return [i, j]
		else:
			continue

i=1, j=2
(
	nums[i=>1] => 2 +
	nums[j=>2] => 4
) => 6 == (target => 6) ? True (run code in if block)
==============================
nums=[3,2,4], target=6

for i=0 in nums.len - 1:
	for j=i+1 in nums:
		if nums[i] + nums[j] == target:
			return [i, j] <--
		else:
			continue

i=1, j=2
return [i=>1, j=>2]
*/

// On^2
var twoSum = function(nums, target) {
	for (let i=0; i < nums.length - 1; i+=1) {
		for (let j=i+1; j < nums.length; j+=1) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			} else {
				continue;
			}
		}
	}
};

// On Try this one next time
var twoSum = function(nums, target) {
	const previousNums = {};

	for (let i=0; i < nums.length; i+=1) {
		let complement = previousNums[target-nums[i]]
		if (complement !== undefined) {
			return [complement, i]
		} else {
			previousNums[nums[i]] = i;
		}
	}
};
