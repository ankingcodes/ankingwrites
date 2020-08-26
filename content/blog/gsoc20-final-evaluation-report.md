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

### Abstract
A package manager is a programming language’s tool to create environments for projects and easily
use external dependencies. It allows users or developers to package their projects and publish them
which can be used by others. Package managers are vital to a programming language and are
integral in the popularity of the language. Therefore, developers and users expect easy
implementation, hassle-free experience, fast builds, least bugs while using a package manager tool.
This project aims to improve the user experience of Mason by solving known bugs, adding new
features, refactoring current features while writing tests and documentation

### Outcome & Code contribution
A total of **[22](https://github.com/chapel-lang/chapel/issues?q=+is%3Aissue+author%3Aankingcodes+) issues** and **[44](https://github.com/chapel-lang/chapel/pulls?q=+is%3Apr+author%3Aankingcodes+) pull requests** was made overall, with **[7](https://github.com/chapel-lang/chapel/issues?q=is%3Aissue+author%3Aankingcodes+label%3A%22gsoc%3A+mason%22) issues** and **[29](https://github.com/chapel-lang/chapel/pulls?q=+is%3Apr+label%3A%22gsoc%3A+mason%22+) pull requests**(**6** from [mason-registry](https://github.com/chapel-lang/mason-registry/pulls?q=is%3Apr+author%3Aankingcodes+is%3Aclosed)) within the GSoC coding period. 

![codegsoc](https://user-images.githubusercontent.com/40923324/91351008-26b38080-e805-11ea-94f8-f93eb2723605.PNG)


- [Improve "`mason external --setup`"](https://github.com/chapel-lang/chapel/pull/15641) : faster setup of the spack registry by shallow cloning of the spack repository. 

- Interactive mode for mason init & mason new : Adds interactive mode for `mason init` and `mason new`, also, adds an option `mason init -d` for the default behavior. 
  - [interactive for init](https://github.com/chapel-lang/chapel/pull/15814)
  - [Interactive mode for mason new](https://github.com/chapel-lang/chapel/pull/15748)

- [Additional check for "`make mason`" in smokeTest](https://github.com/chapel-lang/chapel/pull/15797) : This PR adds `make mason` to Chapel's CI testing script to track changes made to Mason.

- Improvements to user experience while publishing mason packages to mason-registry : Streamlines creation of local-registry by adding a `--create-registry` option to `mason publish`. Adds checks for `test/`, `examples/`, important fields in manifest file such as `license`, git tag versioning, namespace collisions and manifest file formatting. 
  - [Improved mason publish (#15862)](https://github.com/chapel-lang/chapel/pull/15862)
  - [Add License field to manifest file](https://github.com/chapel-lang/chapel/pull/15924)
  - [New checks for "`mason publish --ci-check`"](https://github.com/chapel-lang/chapel/pull/15970)
  - ["`mason publish --create-registry`"](https://github.com/chapel-lang/chapel/pull/16220)















































  
