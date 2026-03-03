export const fetchDividendStatus = async (code: string, token: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v2/fiis/${code}/dividends/status`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Status not found");
  }

  return response.json();
};
