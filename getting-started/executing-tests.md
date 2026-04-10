## ▶️ Running Tests

This section covers the most common commands used to execute Playwright tests.

---

### Run all tests (headless mode)

```bash
$ yarn playwright test
```

By default, tests run in headless mode.

---

### Run tests in headed mode

```bash
$ yarn playwright test --headed
```

This will open the browser UI during test execution.

---

### Run tests in debug mode

```bash
$ yarn playwright test --debug
```

Debug mode allows step-by-step execution and inspection.

---

### Run a specific test file

```bash
$ yarn playwright test tests/example.spec.ts
```

---

### Run tests with UI mode

```bash
$ yarn playwright test --ui
```

This opens Playwright’s interactive UI.

---

## 💡 Tips

- Use `--headed` when you want to visually debug tests
- Use `--debug` to step through execution
- Use `--ui` for a better development experience