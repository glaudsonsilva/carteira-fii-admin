import { useState } from "react";
import { fetchDividendStatus } from "../../services/fiiService";

export type DividendStatus = {
  code: string;
  expectedMonth: number;
  expectedYear: number;
  lastDividend: {
    id: string;
    month: number;
    year: number;
    value: number;
  } | null;
  isUpToDate: boolean;
};

export const useFiiCheck = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DividendStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const check = async (ticker: string) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const token = localStorage.getItem("id_token") || "";
      const data = await fetchDividendStatus(ticker, token);
      setResult(data);
    } catch {
      setError("Erro ao consultar status");
    } finally {
      setLoading(false);
    }
  };

  return { loading, result, error, check };
};
