# Set upstream

Set up synchronization with the upstream repo with:

```bash
git remote add upstream https://github.com/SEI-Remote/men-stack-taco-cats.git
```

You can now synchronize your local repo with the most recent push to the upstream at any time with these commands:

```bash
git fetch --all
git reset --hard upstream/main
```