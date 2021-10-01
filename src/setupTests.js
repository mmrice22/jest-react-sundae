// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// src/setUpTests.js
import { server } from "./mocks/server.js";
// establish API mocking before all tests
beforeAll(() => server.listen());
//reset any request handlers that we may add during the tests,
// so they dont affect the other tests
afterEach(() => server.resentHandlers());
// clean up after the tests are finished
afterAll(() => server.close());
