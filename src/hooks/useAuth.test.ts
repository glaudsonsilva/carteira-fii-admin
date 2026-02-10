import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useAuth } from "./useAuth";

describe("useAuth", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("returns unauthenticated when no token exists", async () => {
    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.status).toBe("unauthenticated");
    });
  });

  it("returns authenticated when API returns 200", async () => {
    localStorage.setItem("id_token", "valid-token");

    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      status: 200,
    } as Response);

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.status).toBe("authenticated");
    });
  });

  it("returns forbidden when API returns 403", async () => {
    localStorage.setItem("id_token", "valid-token");

    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 403,
    } as Response);

    const { result } = renderHook(() => useAuth());

    await waitFor(() => {
      expect(result.current.status).toBe("forbidden");
    });
  });
});
