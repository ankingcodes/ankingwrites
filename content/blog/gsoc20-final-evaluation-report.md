---
path: gsoc_final_evaluations
date: 2020-08-25T14:19:55.874Z
title: 'GSoC''20 Final Evaluation Report '
description: Report for project "Improve Mason Package Manager"
---
![img](https://lh5.googleusercontent.com/7EeTzwVYbGyVvVfAIimUe36xTJoCDOUyiEkna92yHPOMmtQ9c3YYnO-QbHQbTYmC2zizwGNSpm5nPEPKO-dWxLB1OAyHFLDq64ywuJZJvEip_vFqKCPi5j7fpAmTiCp3ZZM04UO-)

## Project:[ Improve Mason Package Manager](https://summerofcode.withgoogle.com/projects/#6454194829000704)

### Organisation: [Chapel Language](https://chapel-lang.org/)
** Ankush Bhardwaj **

Email: ankush.bhardwaj0@gmail.com 

Github: [@ankingcodes](https://github.com/ankingcodes)

### Mentors:
[Ben Albrecht](https://github.com/ben-albrecht), [Sam Partee](https://github.com/spartee), [Krishna Kumar Dey](https://github.com/krishnadey30)

### Abstract
A package manager is a programming language’s tool to create environments for projects and easily
use external dependencies. It allows users or developers to package their projects and publish them
which can be used by others. Package managers are vital to a programming language and are
integral in the popularity of the language. Therefore, developers and users expect easy
implementation, hassle-free experience, fast builds, least bugs while using a package manager tool.
This project aims to improve the user experience of Mason,  a package manager and build tool for the Chapel programming language, by solving known bugs, adding new features, refactoring current features while writing tests and documentation

### Outcome & Code contribution
A total of **[22](https://github.com/chapel-lang/chapel/issues?q=+is%3Aissue+author%3Aankingcodes+) issues** and **[44](https://github.com/chapel-lang/chapel/pulls?q=+is%3Apr+author%3Aankingcodes+) pull requests** was made overall, with **[7](https://github.com/chapel-lang/chapel/issues?q=is%3Aissue+author%3Aankingcodes+label%3A%22gsoc%3A+mason%22) issues** and **[29](https://github.com/chapel-lang/chapel/pulls?q=+is%3Apr+label%3A%22gsoc%3A+mason%22+) pull requests**(**6** from [mason-registry](https://github.com/chapel-lang/mason-registry/pulls?q=is%3Apr+author%3Aankingcodes+is%3Aclosed)) within the GSoC coding period. 

![codegsoc](https://user-images.githubusercontent.com/40923324/91351008-26b38080-e805-11ea-94f8-f93eb2723605.PNG)


- [Improve "`mason external --setup`"](https://github.com/chapel-lang/chapel/pull/15641) : faster setup of the spack registry by shallow cloning  the spack repository. 

- Interactive mode for mason init & mason new : Adds interactive mode for `mason init` and `mason new`, also, adds an option `mason init -d` for the default behavior. 
  - [interactive for init](https://github.com/chapel-lang/chapel/pull/15814)
  - [Interactive mode for mason new](https://github.com/chapel-lang/chapel/pull/15748)

- [Additional check for "`make mason`" in smokeTest](https://github.com/chapel-lang/chapel/pull/15797) : This PR adds `make mason` to Chapel's CI testing script to track changes made to Mason.

- Improvements to user experience while publishing mason packages to mason-registry : Streamlines creation of local-registry by adding a `--create-registry` option to `mason publish`. Adds checks for `test/`, `examples/`, important fields in manifest file such as `license`, git tag versioning, namespace collisions and manifest file formatting. 
  - [Improved mason publish (#15862)](https://github.com/chapel-lang/chapel/pull/15862)
  - [Add License field to manifest file](https://github.com/chapel-lang/chapel/pull/15924)
  - [New checks for "`mason publish --ci-check`"](https://github.com/chapel-lang/chapel/pull/15970)
  - ["`mason publish --create-registry`"](https://github.com/chapel-lang/chapel/pull/16220)
  - [Shift registry check to `"mason registry --dry-run"`](https://github.com/chapel-lang/chapel/pull/16153)
  - [SKIPIF for create-registry test](https://github.com/chapel-lang/chapel/pull/16306)
  - [mason update: fixed registry check](https://github.com/chapel-lang/chapel/pull/16214)
  - [mason build: skip registry update](https://github.com/chapel-lang/chapel/pull/16182)


- Added a bash completion script for mason commands : [mason bash completion script #16035](https://github.com/chapel-lang/chapel/pull/16035)

- [mason-consistent kwarg parsing](https://github.com/chapel-lang/chapel/pull/16098): Supports `--flag=value` and `--flag value` for mason flags that accepts a value.

- Improvements to mason-registry: Set up CI/CD pipelines using Github Actions, automated the review and testing process and created a quality scoring system to rank mason packages on a cache file. Integrated the ranking system to `mason search` to display packages according to their ranking on the package registry.  `mason search` first fetches all the packages from `Bricks/` of mason-registry. Then it checks whether a valid score for a package exists in cache file. If not found, it assigns a default score to that package else vice versa.
Then it sorts the packages in decreasing order of their scores. The ranking system works as follows: 
  - If number of registries is 1, i.e., no registry other than mason-registry is found, the packages would be sorted first on basis of ranks. Then, package names that start with a certain query rank higher and ultimately, the package name that directly matches to the query is ranked at the top.
  - If number of registries is more than 1, i.e., one or multiple local registries exists, then mason search falls back to its current behavior which ranks packages based on lexicographical order and direct query hit.
    - Improvements to CI script: [#38](https://github.com/chapel-lang/mason-registry/pull/38),  [#44](https://github.com/chapel-lang/mason-registry/pull/44), [#45](https://github.com/chapel-lang/mason-registry/pull/45), [#47](https://github.com/chapel-lang/mason-registry/pull/47)
    - [Shift to GitHub Actions (#48)](https://github.com/chapel-lang/mason-registry/pull/48)
    - [Normalization of scores (#51)](https://github.com/chapel-lang/mason-registry/pull/51)
    - [Integrate mason search to mason-registry's cache (#16223)](https://github.com/chapel-lang/chapel/pull/16223)

- Mason Bench and UnitTest Benchmarking framework extension: Led a design discussion to extend the UnitTest module to support micro-benchmarking in Chapel. Added a launcher `mason bench` to fetch benchmark test files, compile and display execution metrics. 
  - Design issue: [Mason Bench and benchmarking framework design (#15680)](https://github.com/chapel-lang/chapel/issues/15680)
  - Pull request: [mason bench & extend UnitTest for benchmarking (#16248)](https://github.com/chapel-lang/chapel/pull/16248)

Benchmarks are stored inside the `benchmark/` directory. 
The test[ `arrayAdd.chpl` ](https://github.com/chapel-lang/chapel/blob/master/test/studies/elegance/arrayAdd.chpl)is written using Benchmark class as follows: 
```chpl
use UnitTest;

config const order: int = 10, 
       subOrder: int = 5;

proc elegant() {
  var Dom = {1..order, 1..order},
      subDom = {1..subOrder, 1..subOrder};
  var Array: [Dom] real, subArray: [Dom] real = 2.0;
  Benchmark.startTimer();    // starts the timer 
  for 1..Benchmark.N {
    for (i, j) in Dom {
      for k in 1..subOrder do 
        Array[i,j] += i*j*subArray[k, k];
    }
  }
  Benchmark.stopTimer();     // stops the timer
  Benchmark.log("elegant");   // function name passed for logging metrics
}

proc performant() {
  var Dom = {1..order, 1..order},
      subDom = {1..subOrder, 1..subOrder};
  var Array: [Dom] real, subArray: [Dom] real = 2.0;
  var tmp: real = 0;
  Benchmark.startTimer();
  for 1..Benchmark.N {
    for (i, j) in Dom {
      for k in 1..subOrder do 
        tmp += i*j*subArray[k, k];
      Array[i,j] += tmp;
    }
  }
  Benchmark.stopTimer();
  Benchmark.log("performant");
}

proc main() {
  elegant();
  performant();
}
```
The compopts for this program is defined in `benchmark/arrayAdd.toml` as follows: 
```toml 
[bench]
[bench.arrayAdd]
compopts = "--set order=100 --set subOrder=1000"
```
When `mason bench` is run inside a mason project home, having a directory tree as : 
```
Mason.toml
/src/
/test/
/example/
/benchmark/
   arrayAdd.chpl
   arrayAdd.toml
   transposePerf.chpl
   invalid.chpl
   array/
      a.chpl
      arrayAdd.chpl
```
The output we get is as follows: 
```
Skipping registry update since no dependency found in manifest file.
Compiling Benchmark Tests ...

Compiled arrayAdd.chpl successfully
Compilation failed for invalid.chpl
Compiled transposePerf.chpl successfully
Compiled array/a.chpl successfully
Compiled array/arrayAdd.chpl successfully

============================================

             Benchmark Results

============================================

Function: elegant
Iterations: 10000
Total Time Elapsed (ms): 4119.0
Average Time (ms/N): 0.4119
Function: performant
Iterations: 10000
Total Time Elapsed (ms): 5606.0
Average Time (ms/N): 0.5606

============================================

Transpose:
Function: transposePerf
Iterations: 10
Total Time Elapsed (ms): 87647.0
Average Time (ms/N): 8764.8

============================================

Function: addNumbers
Iterations: 10000
Total Time Elapsed (ms): 1.0
Average Time (ms/N): 0.0001

============================================

Function: elegant
Iterations: 10000
Total Time Elapsed (ms): 4514.0
Average Time (ms/N): 0.4514
Function: performant
Iterations: 10000
Total Time Elapsed (ms): 5600.0
Average Time (ms/N): 0.56

============================================
```
- Toml module redesign: Current Toml implementation cannot differentiate between quotes present in Toml table headers and in key-value pairs. Also, periods present inside quotes of a Toml headers is treated as same as the periods outside the quotes. For example, consider the following toml :
```toml 
[LocalAtomics."0.1.0"] 
score = "5"
```
Here, during parsing of TOML file, the `"5"` is treated same as that of `"0.1.0"` whereas one of them is a  value to a key `score ` and the other is part of a table header. This is due to the use of regex during Toml parsing. 

Additionally, after parsing the table header, the subtables are as follows: 
```toml 
[LocalAtomics]
[LocalAtomics."0]
[LocalAtomics."0.1]
[LocalAtomics."0.1.0"]
score = "5"
```
instead of 
```toml 
[LocalAtomics]
[LocalAtomics."0.1.0"]
score = "5"
```
This is also due to the use of regex while parsing. The regex cannot differentiate between periods inside & outside of quotes.

[#16141](https://github.com/chapel-lang/chapel/pull/16141) was an effort to fix this issue but we found larger design challenges. For example, 
if we create an additional regex to parse `[LocalAtomics."0.1.0"]` entirely as `LocalAtomics."0.1.0"` , then the regex would require look-ahead and look-behind features for capturing the value after and behind of opening and closing square brackets which is not yet supported by our Regex module. Another issue would be that the regex would treat table header and array of elements as same. 
For example, 
```toml 
[LocalAtomics."0.1.0"]    # regex would capture LocalAtomics."0.1.0" here
tests = [ a.chpl, b.chpl, c.chpl ]   # regex would capture a.chpl, b.chpl, c.chpl here
```
Therefore, we require to rethink the design of Toml module so that we can fix these errors and also support features that are yet to be implemented ( Array of Tables ) 

### Related Documentation: 
- [** Mason **](https://chapel-lang.org/docs/tools/mason/mason.html)
- [** UnitTest framework **](https://chapel-lang.org/docs/modules/packages/UnitTest.html)

### Further Work
- Lead design discussion for [Toml module redesign issue](https://github.com/chapel-lang/chapel/issues/16254)
- Additional features for `mason bench`: Current mason bench design is simple and lightweight. An extension of `mason bench` could be to support benchmarking test function recognition using primitives, defined in the compiler. Also, we could also support additional metrics like memory allocation for `mason bench`. 

































  
