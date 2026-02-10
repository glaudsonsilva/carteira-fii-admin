import { render, screen, waitFor } from "@testing-library/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { App } from "./App";
import { beforeEach, expect, test, vi } from "vitest";
import { AppRoutes } from "./routes/AppRoutes";
import { renderWithRouter } from "./test/renderWithRouter";

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

test("redirects to login when user is not authenticated", async () => {
  renderWithRouter(<AppRoutes />, { route: "/" });

  await waitFor(() => {
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });
});

test("shows admin page when user is authenticated", async () => {
  localStorage.setItem("id_token", "valid-token");

  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    status: 200,
    json: async () => ({
      id: "g123",
      email: "mail@gmail.com",
      name: "you",
    }),
  } as Response);

  renderWithRouter(<AppRoutes />, { route: "/" });

  await waitFor(() => {
    expect(screen.getByText(/você está logado/i)).toBeInTheDocument();
  });
});

test("redirects to forbidden page when user is authenticated but not authorized", async () => {
  localStorage.setItem("id_token", "valid-token");

  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: false,
    status: 403,
  } as Response);

  renderWithRouter(<AppRoutes />, { route: "/" });

  await waitFor(() => {
    expect(screen.getByText(/acesso negado/i)).toBeInTheDocument();
  });
});
