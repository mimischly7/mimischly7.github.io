# July 10, 2024

## Problem & Solution
After recloning the repo, I had forgotten to run a command that sets up the pre-commit hooks (`yarn prepare` in the project), so I committed changes with style issues. The problem is that the style-fixing tool we are using, `lint-staged`, only operates on files on the staging area (git index), as the name suggests.

So I needed a way to "uncommit" the committed changes and bring them back to the staging area, so that (after setting up `lint-staged`) now trying to commit would kickstart the pre-commit hooks as required.

How do you bring commited changes back to the working directory?

You need to use the `git reset` command as follows:
```
git reset --soft HEAD~n
```
, where `n` is the number of commits you want to go back.

The `--soft` flag is very important, as it tells git to uncommit the stages, but **leave these changes *staged* in the index**.

On the other hand,
- The `--mixed` flag would uncommit changes, unstage them, but still keep them in the working tree (*unstaged*), and
- The `--hard` flag would uncommit the changes, unstage them, and also fully remove them from the working directory.

Therefore, the three flags, `--soft`, `--mixed`, and `--hard` can be seen as progressively increasing in severity.
