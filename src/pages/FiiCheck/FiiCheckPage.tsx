import { useState } from "react";
import { useFiiCheck } from "./useFiiCheck";

export const FiiCheckPage = () => {
  const [ticker, setTicker] = useState("");
  const { loading, result, error, check } = useFiiCheck();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticker.trim()) return;
    check(ticker.trim().toUpperCase());
  };

  return (
    <div className="card">
      <h2>Verificar FII</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
      >
        <input
          type="text"
          placeholder="Ex: HGLG11"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="input"
        />

        <button type="submit" className="primary-button" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {/* Erro */}
      {error && (
        <div
          style={{
            marginTop: "1.5rem",
            color: "#991b1b",
            backgroundColor: "#fee2e2",
            padding: "0.75rem",
            borderRadius: "8px",
          }}
        >
          {error}
        </div>
      )}

      {/* Resultado */}
      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3>Status</h3>

          <div
            style={{
              padding: "1rem",
              borderRadius: "8px",
              backgroundColor: result.isUpToDate ? "#dcfce7" : "#fee2e2",
              color: result.isUpToDate ? "#166534" : "#991b1b",
              fontWeight: 500,
            }}
          >
            {result.isUpToDate
              ? "✔ Dividendo atualizado"
              : `⚠ Faltando dividendo de ${result.expectedMonth}/${result.expectedYear}`}
          </div>

          {result.lastDividend && (
            <div style={{ marginTop: "1rem" }}>
              <h4>Último registrado</h4>
              <p>
                <strong>Mês:</strong> {result.lastDividend.month}/
                {result.lastDividend.year}
              </p>
              <p>
                <strong>Valor:</strong> R$ {result.lastDividend.value}
              </p>
              <p>
                <strong>ID:</strong> {result.lastDividend.id}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
