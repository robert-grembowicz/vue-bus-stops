import "@testing-library/jest-dom";

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Assertion<T = any> = jest.Matchers<void, T>;
}
