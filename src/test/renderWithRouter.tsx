import type { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

type Options = {
  route?: string;
};

export const renderWithRouter = (
  ui: ReactNode,
  { route = "/" }: Options = {},
) => {
  return render(
    <GoogleOAuthProvider clientId="test-client-id">
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </GoogleOAuthProvider>,
  );
};
