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

## List STL container 
Lists are sequence containers that allow constant time insert and erase operations anywhere within the sequence, and iteration in both directions. Lists are basically doubly-linked lists. The difference between `list` and `forward_list` is that `forward_list` objects are single linked lists and can only be iterated forwards.
Compared to other sequence containers, lists perform better in inserting, extracting and moving elements in any position within the container.
The major drawback of `list` and `forward_lists` is that they lack direct access to the elements by their position. They also consume some extra memory to keep the linking information associated to each element.

### Member Functions 
#### Iterators: 
`begin`, `end`, `rbegin`, `rend`

#### Capacity: 
`empty`, `size`, `max_size`

#### Element access: 
- `first` : returns first element of the list
- `back` : returns last element of the list

#### Modifiers: 
- `assign` : assign new content to container, replacing its current contents and modifying its size.
```cpp
list<int> a;
a.assign(InputIterator first, InputIterator second);
a.assign(size_type n, const value_type& val);
```
- `push_front`: inserts an element at beginning
- `pop_front`: delete first element
- `push_back`: inserts an element at the end 
- `pop_back`: delete last element
- `emplace_front`: construct and insert element at the end
- `insert`: container is extended by inserting new elements at the specified position
- `erase`: removes from the list container either a single element (*position*) or a range of elements(*[first,last]*)
```cpp
list<int> a;
for(int i=0;i<=5;i++) a.push_back(i);
a.insert(a.begin()+3, 2, 20); // insert two 20 at position 3
list<int> b(19,29); 
a.insert(a.begin(), b.begin(), b.end()); // insert b in a
a.erase(a.begin()+2); // erase element at 2
a.erase(a.begin()+2, a.end()); // erase elements from 2nd position to end
```
- `swap`: exchanges contents of the container
- `resize`: resizes container so that it contains n elements only
- `clear`: removes all elements from list container

#### Operations:
- `splice`: transfers elements from x into the container, inserting them at position
The first version(1) transfers all elements into the container
The second version(2) transfers only element pointed from x into container
The third version(3) transfers the range `[first, last)` from x into container 
```cpp
list<int> a; 
for(int i=1;i<=4;i++) a.push_back(i); 
list<int> b; 
for(int i=1;i<=3;i++) b.push_back(i*10);
a.splice(a.begin(), b); // (1) 
b.splice(b.begin(), a, a.end()-2); // (2)
b.splice(b.begin(), a, a.begin()+3, a.end()); // (3)
```
- `remove`: remove from container all elements that match to *val*. Unlike *erase* which removes elements by position, this function removes elements by their value. 
```cpp
a.remove(3); 
```
- `remove_if`: removes element from container for which predicate *pred* returns true.
```cpp
bool is_odd(int x){
  if(x&1) return true;
  else return false;
}

a.remove_if(is_odd());
```
- `unique`: this function without parameters removes all but the fitst element from every consecutive group of equals in the container. Notice that an element is only removed from the list container if it compares equal to the element immediately preceding it. Thus, this function is especially useful for sorted lists. 
The function accepts a single argument which is a predicate or condition on which uniqueness is judged.
```cpp
a.unique();
```
- `merge` : merge sorted lists. Merges x into the list by transferring all of its elements at their respective ordered positions into the container. This effectively removes all the elements in x and inserts them into their ordered position within the container. The operation is performed  without constructing nor destroying any element. 
- `sort` : sorts the elements in the list 
```cpp
a.sort(); b.sort();
a.merge(b);
```
- `reverse` : reverses the order of the elements in the list container. 
```cpp
a.reverse();
```

## Set STL container
Sets are containers that store unique elements in a specific order. Each value in the set should be unique. They can be inserted and removed but cannot be modified. Sets are typically implemented as binary search trees.
### Member functions : 
#### Iterators: 
`begin`, `end`, `rbegin`, `rend`

#### Capacity: 
`empty`, `size`, `max_size`

#### Modifiers : 
`insert`: extends the container by inserting new elements, returns a pair where pair::first points to either the newly inserted element is already in set. The pair::second element in the pair is set to true if a new element was inserted or false if equivalent element already exists.
```cpp
set<int> a; 
a.insert(x);
```
- `erase`: removes from the set container a single element or a range of elements
- `swap` : exchanges the contents of set containers
- `clear` : removes all elements from the set container

#### Operations : 
- `find` : searches the container for an element equivalent to *val*
- `count` : returns the number of occurences of *val* in container
- `lower_bound` :  returns an iterator pointing to the first element in the container which is not considered to go before *val*(either equivalent or goes after)
- `upper_bound` :  returns an iterator pointing to the first element in the container which is considered to go after *val*
- `equal_range` : returns the bounds of a range that includes all the elements in the container that are equivalent to *val*
```cpp 
set<int> a;
for(int i=0;i<10;i++) a.insert(i);
auto it = a.find(3);
cout << a.count(3);
auto it_low = a.lower_bound(1);
auto it_up = a.upper_bound(2);
set<int> b; 
for(int i=1;i<=5;i++) b.insert(i*10);
pair<set<int>, set<int>> ret; 
ret = b.equal_range(30);
cout << *ret.first << endl; // 30 - lower
cout << *ret.second << endl; // 40 - upper
```
## Multi-Set STL container
Multisets are containers that store elements following a specific order and where multiple elements can have equivalent values. In multiset, elements can be added or removed but cannot be modified. They are similar to javascript objects, and exist as key value pairs. 

```cpp
multiset<int> a;
```
### Member function
#### Iterators: 
`begin`, `end`, `rbegin`, `rend`

#### Capacity:
`empty`, `size`, `max_size`

#### Modifiers:
`insert`, `erase`, `swap`, `clear`

#### Observers:
`key_comp`, `value_comp`

#### Operations: 
`find`, `count`, `lower_bound`, `upper_bound`, `equal_range`
`Note : All functions are similar to that of set`

## Map STL container
Maps are associative containers that store elements formed by a combination of a key value and a mapped value, following a specific order. Maps are implemented as binary search trees. In a map, the key values are generally used to sort and uniquely identify the elements, while the mapped values store the content associated with the key. The types of key and mapped value may differ.
The mapped values in a map can be accessed directly by their corresponding key using the bracket operator.
### Member functions:
#### Iterators : 
`begin`, `end`, `rbegin`, `rend`
#### Capacity :
`empty`, `size`, `max_size`
#### Element access :
- `[]`: `map[k]`, if k matches the key of an element in the container, the function returns a reference to its mapped value. If k does not match the key of any element in the container, the function inserts a new element with that key and returns a reference to its mapped value. 
```cpp
map<int, string> a;
a[0] = "ankush";
a[1] = "bhardwaj";
cout << a[0] << ' ' << a[1] << endl;
```
- `at`: returns a reference to the mapped value of the element identified with key k. If k does not match the key of any element in the container, the function throws an `out_of_range` exception.
```cpp
map<string, int> movie_ticket = {
  { "3Idiots",0 },
  { "Baby", 0 },
  { "JollyLLB", 0 }
};
movie_ticket.at("3Idiots") = 350;
movie_ticket.at("Baby") = 400;
movie_ticket.at("JollyLLB") = 250;
for( auto x : movie_ticket) 
  cout << x.first << ' ' << x.second << endl;
```
#### Modifiers 
`insert`, `erase`, `swap`, `clear`

#### Observers 
`key_comp`, `value_comp`

#### Operations 
`find`, `count`, `lower_bound`, `upper_bound`, `equal_range`

## Multimap STL container
These are associative containers that store elements formed by a combination of a key value and a mapped value, following a specific order, and where multiple elements can have equivalent keys.
In a multimap, the key values are generally used to sort and uniquely identify the elements, while the mapped values store the content associated to this key. The types of key and mapped value may differ. They are generally implemented as binary search trees.
```cpp
multimap<char, int> a;
```
### Member function 
#### Iterators
`begin`, `end`, `rbegin`, `rend`

#### Capacity 
`empty`, `size`, `max_size`

#### Modifiers 
`insert`, `erase`, `swap`, `clear`

#### Observers
`key_comp`, `value_comp`

#### Operations
`find`, `count`, `lower_bound`, `upper_bound`, `equal_range`




