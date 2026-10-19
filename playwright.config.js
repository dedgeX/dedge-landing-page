const { defineConfig } = require("@playwright/test");
module.exports = defineConfig({
  testDir: "./tests",
  workers: 2,
  use: {
    baseURL: "http://127.0.0.1:3000",
    launchOptions: {
      executablePath: process.env.CI
        ? undefined
        : process.env.PLAYWRIGHT_EXECUTABLE_PATH || "/usr/bin/google-chrome",
      args: ["--no-sandbox"],
    },
  },
  webServer: {
    command: "python3 -m http.server 3000 --directory out",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "ignore",
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "artifacts/browser-report", open: "never" }],
  ],
});
