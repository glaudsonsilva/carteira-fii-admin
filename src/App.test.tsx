import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

test("renders admin title", () => {
  render(
    <GoogleOAuthProvider clientId="test-client-id">
      <App />
    </GoogleOAuthProvider>,
  );

  expect(screen.getByText(/admin carteira fii/i)).toBeDefined();
});
