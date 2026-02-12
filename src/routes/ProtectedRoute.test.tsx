import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

vi.mock("../hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "../hooks/useAuth";

describe("ProtectedRoute", () => {
  const renderRoute = () =>
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div>Admin Content</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/forbidden" element={<div>Forbidden Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

  it("shows loading state", () => {
    (useAuth as any).mockReturnValue({ status: "loading" });

    renderRoute();

    expect(screen.getByText(/Verificando acesso/i)).toBeInTheDocument();
  });

  it("redirects to login when unauthenticated", async () => {
    (useAuth as any).mockReturnValue({ status: "unauthenticated" });

    renderRoute();

    expect(await screen.findByText(/login page/i)).toBeInTheDocument();
  });

  it("redirects to forbidden when unauthorized", async () => {
    (useAuth as any).mockReturnValue({ status: "forbidden" });

    renderRoute();

    expect(await screen.findByText(/forbidden page/i)).toBeInTheDocument();
  });

  it("renders children when authenticated", () => {
    (useAuth as any).mockReturnValue({ status: "authenticated" });

    renderRoute();

    expect(screen.getByText(/admin content/i)).toBeInTheDocument();
  });
});
