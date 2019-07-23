#include<string>
#include<vector>

using namespace std;

template<typename T>
class HashTable {
public:
	HashTable(int size) {
		arr = new T[size];
		size_ = size;
	};
	void hashAdd(string key_val, T item) {
		int key = calculateKey(key_val);
		arr[key % size] = item;
	}

	T getItem(string key_val) {
		int key = calculateKey(key_val);
		return arr[key % size];
	}

private:
	T* arr = NULL;
	int size_ = 0;

	int calculateKey(string key_val) {
		int key = 0;

		for (int i = 0; i < key_val.length(); i++) {
			key += (int)key_val[i];
		}

		return key;
	}
};