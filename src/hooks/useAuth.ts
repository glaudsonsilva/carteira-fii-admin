import { useEffect, useState } from "react";

export type AuthStatus =
  | "loading"
  | "unauthenticated"
  | "forbidden"
  | "authenticated";

export const useAuth = () => {
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    const token = localStorage.getItem("id_token");

    if (!token) {
      setStatus("unauthenticated");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/admin/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) setStatus("unauthenticated");
        else if (res.status === 403) setStatus("forbidden");
        else if (res.ok) setStatus("authenticated");
        else setStatus("unauthenticated");
      })
      .catch(() => setStatus("unauthenticated"));
  }, []);

  return { status };
};
