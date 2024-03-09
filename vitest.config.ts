import reactNative from "vitest-react-native";
import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  plugins: [reactNative()],
  resolve: {
    alias: {
      "@commonStyles": resolve(__dirname, "src/common/styles"),
    },
  },
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*", "**/*.test.ts", "**/*.test.tsx"],
    },
  },
});
