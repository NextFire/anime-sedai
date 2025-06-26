import { useState } from "react"
import type { Data } from "../anime-data"
import { App } from "./app"

export default function AppWrapper() {
  const [data, setData] = useState<Data>()
  const [input, setInput] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value)
    setError(null)
    try {
      const json = JSON.parse(e.target.value)
      setData(json)
    } catch {
      setError("Invalid JSON")
    }
  }

  return data ? (
    <App animeData={data} />
  ) : (
    <div
      style={{
        border: "2px dashed #aaa",
        borderRadius: 8,
        padding: 40,
        textAlign: "center",
        background: "#fff",
        color: "#888",
        margin: 40,
        maxWidth: 700,
        marginInline: "auto",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        Paste your <b>JSON</b> anime data below to begin.
      </div>
      <textarea
        value={input}
        onChange={handleInputChange}
        placeholder="Paste your anime JSON here..."
        rows={14}
        style={{
          width: "100%",
          fontFamily: "monospace",
          fontSize: 15,
          borderRadius: 6,
          border: "1.5px solid #bbb",
          padding: 16,
          background: "#f8f8f8",
          color: "#444",
          resize: "vertical",
          minHeight: 220,
          marginBottom: 12,
        }}
        spellCheck={false}
        autoFocus
      />
      {error && (
        <div style={{ color: "#c00", marginBottom: 12, fontSize: 14 }}>
          {error}
        </div>
      )}
      <div
        style={{
          marginTop: 16,
          fontSize: 14,
          color: "#bbb",
          textAlign: "left",
          maxWidth: 500,
          marginInline: "auto",
        }}
      >
        <div
          style={{
            marginBottom: 8,
            fontWeight: 600,
            color: "#888",
          }}
        >
          Example JSON:
        </div>
        <div style={{ marginBottom: 8, color: "#999" }}>
          <b>Note:</b> <code>titleEn</code> is <b>required</b>, other fields (
          <code>titleZh</code>, <code>titleJa</code>, <code>score</code>) are
          optional.
        </div>
        <pre
          style={{
            background: "#f8f8f8",
            borderRadius: 6,
            padding: 16,
            overflowX: "auto",
            fontSize: 13,
            color: "#444",
            border: "1px solid #eee",
          }}
        >
          {`{
  "2023": [
    {
      "titleZh": "间谍过家家",
      "titleEn": "SPY x FAMILY",
      "titleJa": "スパイファミリー",
      "score": 9
    }
  ],
  "2024": [
    {
      "titleZh": "葬送的芙莉莲",
      "titleEn": "Frieren: Beyond Journey’s End",
      "titleJa": "葬送のフリーレン",
      "score": 10
    },
    {
      "titleZh": "物语系列 外传",
      "titleEn": "Monogatari Series: Off Season",
      "titleJa": "〈物語〉シリーズ オフシーズン",
      "score": 8
    }
  ]
}`}
        </pre>
      </div>
    </div>
  )
}
