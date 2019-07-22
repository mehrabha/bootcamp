vector<int> addOne(vector<int> a) {
	vector<int> result = {};
	bool isCarry = false;
	
	for (int i = a.size() - 1; i >= -1; i++) {
		if (i == a.size() - 1) {
			num = a[i] + 1;
			isCarry = false;
			if num >= 10 {
				result.push_back(num % 10);
				isCarry = true;
			} else {
				result.push_back(num);
			}
		} else if (i >= 0) {
			if (isCarry) {
				num = a[i] + 1;
				isCarry = false;
				if num >= 10 {
					result.push_back(num % 10);
					isCarry = true;
				}
				else {
					result.push_back(num);
				}
			} else {
				result.push_back(a[i]);
			}
		} else {
			if (isCarry) {
				result.push_back(1);
			}
		}
	}
}
