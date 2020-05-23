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

