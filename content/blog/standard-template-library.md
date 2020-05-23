---
path: STL_primer
date: 2020-05-23T19:52:24.797Z
title: Standard Template Library
description: C++ STL primer capsule
---
## Arrays STL container
Arrays are fixed-size sequence containers: they hold a specific number of elements ordered in a strict linear sequence.
Arrays offer contiguous storage, allowing constant time random access to elements. Pointers to an element can be offset to access other elements. They have fixed-size aggregate, i.e., uses implicit constructors and destructors to allocate required space statically. Its size is compile time constant. No memory or time overhead.

### Member functions 
#### Iterators
- `begin`: return iterator to beginning
- `end` : return iterator to end
```cpp
main()
  ll n; cin>>n;
  array<int, n> a;
  // or 
  array<int> a(n);
  for(auto &i : a) cin>>i;
  
  for( auto i=a.begin(); i!=a.end(); i++)
    cout<<*i<<endl;

  for( auto x:a ) cout<<x<<endl;
```
- `rbegin` : return reverse iterator to reverse begin (~ `end`)
- `rend` : return reverse iterator to reverse end (~ `begin` )

#### Capacity 
- `size` : return number of elements in container
- `max_size` : return max number of elements that array can hold
- `empty` : returns a bool indicating whether container is empty 
```cpp
main()
  array<int,10> a = {1,2,3,4};
  cout<<a.size()<<endl; // 4
  cout<<a.max_size()<<endl; // 10
  cout<<(a.empty() ? "is empty" : "is not empty")<<endl;
```
#### Modifiers 
- `fill` : sets *val* as the value for all elements in array
- `swap` : swaps/exchanges the content of 2 arrays or values within array
```cpp
main()
  array<int> a = {1,2,3};
  array<int> b = {4,5,6};
  a.swap(b);
  cout << a; // 4,5,6
  cout << b; // 1,2,3
  a.fill(0);
  cout << a; // 0,0,0
```
#### Element access
- `[]` : used as `a[i]` or `b[0]`
- `at` : returns a reference to element at position n in the array
```cpp
vector<int> a = {1,2,3};
cout << a.at(2); // 3
```
- `front` : returns reference to first element
- `back` : returns reference to last element
```cpp
cout << a.front() << '\t' << a.back(); // 1 3
```

## Vector STL container
These are arrays that can change in size. They are contiguous storage locations for their elements, which means that their elements can be accessed using offsets on regular pointers to its elements, and just as efficiently as in arrays. However, size can change dynamically, with their storage being handled automatically by the container.
Vectors use array that may need to be dynamically reallocated to grow in size when new elements are inserted, which implies allocating a new array and moving all elements to it. 
Compared to arrays, vectors consume more memory to manage storage dynamically. The properties of this container are - Sequence, Dynamic arrays and allocator aware.

### Member functions 
#### Iterators: 
- `begin`: return iterator to beginning
- `end` : return iterator to end
- `rbegin` : return reverse iterator to reverse beginning
- `rend` : return reverse iterator to reverse end

#### Capacity: 
- `size` : return number of elements in the vector
- `max_size` : return max number of elements that vector can hold
- `resize` : resizes the container so that it contains n elements only.(*saves space*) `resize` reduces the `size` of a vector. It has an argument n, which is the number of elements the vector should contain. We can either expand or reduce the container to n elements, by filling or removing elements respectively.
- `capacity` : returns size of storage space currently allocated
- `empty` : returns a boolean whether the vector is empty
- `shrink_to_fit`: similar to `resize` but applies on `capacity` or allocated storage
```cpp
main()
  vector<int> v(100);
  for(int i=1;i<10;i++) v.push_back(i);
  cout << v.size() << endl; // 110
  cout << v.max_size() << endl; // 1073741823
  cout << v.capacity() << endl; // 200
  cout << v.empty() ? "Empty" : "not empty" << endl;
  v.resize(10);
  cout << v.size() << endl; // 10
  v.shrink_to_fit(); 
  cout << v.capacity() << endl; // 10
```
#### Element access: 
- [] : used as v[i] 
- `at` : gets element at an index.
- `front` : returns first element of vector
- `back` : returns last element of vector

#### Modifiers: 
- `assign`: useful in copying from one vector to another. 
```cpp
vector<int> a = {1,2,3};
vector<int> b; 
b.assign(a.begin(), a.end());
```
- `push_back`: adds a new element to the end of vector, after its current last element.
- `pop_back`: removes last element from the vector
```cpp
vector<int> a(n); 
for(auto &i : a) cin>>i;
while(!a.empty()){
  cout<<a.back()<<endl;
  a.pop_back();
}
```
- `insert`: inserting elements at a specified *position*. That position is denoted by *iterators*.
```cpp
vector<int> a = {2,10};
a.insert(a.begin()+2, 8); // 2,10,8
vector<int> b = {1,2,3};
b.insert(b.begin()+3, a.begin(), a.end()); // 1,2,3,2,10,8
```
- `erase` : removes either a single element at a *position* or a range of elements. 
```cpp
b.erase(b.begin()); // 2,3,2,10,8
b.erase(b.begin(), b.begin()+2); // 2,10,8
```
- `swap` : exchanges content of the container
- `clear` : removes all elements from the vector

`Note:` We can also assign a vector to another vector as follows: 
```cpp
vector<int> a = {1,2,3};
vector<int> b;
b = a;
```

## Deque STL container
Deque (double-ended queue) are sequence containers with dynamic sizes that can be expanded or contracted on both ends. They provide functionality similar to `vectors` but with efficient insertion and deletion of elements also at beginning , and not only to end. 
Both vectors and deques provide similar functionality, but they work in different ways: vectors use a single array that is reallocated for growth, the elements of a deque can be scattered in different chunks of storage, with the container keeping the necessary information internally to provide direct access to any of its elements in constant time and with uniform sequential interface. 
Note :- For operations that involve frequent insertion or removals of elements at positions other than the beginning or end, deques perform worse and have less consistent iterators than *lists* and *forward lists*

### Member Functions : 
#### Iterators : 
`begin`, `end`, `rbegin`, `rend`
#### Capacity : 
`size`, `max_size`, `resize`, `empty`, `shrink_to_fit`
#### Element access : 
`[]`, `at`, `front`, `back`
#### Modifiers : 
`assign`, `push_back`, `push_front`, `pop_back`, `pop_front`, `insert`, `erase`, `swap`, `clear`.
```cpp
deque<int> a(n) = {1,2,3,4};
a.push_front(0); // 0,1,2,3,4
a.push_back(5); // 0,1,2,3,4,5
while(!a.empty()){
  a.pop_front();
  a.pop_back();
}
/*
Popping occured as follows : 
0 1 2 3 4 5 
1 2 3 4
2 3
NULL
*/
```


