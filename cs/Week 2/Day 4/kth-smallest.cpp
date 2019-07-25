void mergeSort(vector<int>& numbers, int low, int high) {
	if (high >= low) {
		return;
	}

	int mid = (low + high) / 2;
	mergeSort(numbers, low, mid);
	mergeSort(numbers, mid + 1, high);

	vector<int> aux;
	int i = low;
	int j = mid + 1;

	while (i <= mid && j <= high) {
		if (numbers[i] < numbers[j]) {
			aux.push_back(numbers[i]);
			i++;
		}
		else {
			aux.push_back(numbers[j]);
			j++;
		}
	}

	while (i <= mid) {
		aux.push_back(numbers[i]);
		i++;
	}

	while (j <= high) {
		aux.push_back(numbers[j]);
		j++;
	}

	for (int k = low; k <= high; k++) {
		numbers[k] = aux[k - low];
	}
}

int kth_smallest(vector<int> numbers, int rank) {
	mergeSort(numbers, 0, numbers.size() - 1);

	return (numbers[rank - 1]);
}
