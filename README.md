# fresh project

### Usage

Start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### Testing

```
deno test -A
```

This will launch the puppeteer tests.

### Secrets for GitHub Actions

Use this command to get the secret contents

```
base64 -i .env.github | pbcopy
```

secret name should be `ENV_GITHUB_ACTIONS`
