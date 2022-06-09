import React, { useState } from "react";
import "./styles.css";
import { FlatfileButton, FlatfileResults } from "@flatfile/react";

export default function App() {
  const [results, setResults] = useState<FlatfileResults>();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Import some contacts for fun</h2>

      <FlatfileButton
        // mountUrl="https://portal-2.flatfile.io/" // used to override Flatfile URL for on-prem deployments
        licenseKey="aa921983-4db2-4da1-a580-fbca0b1c75b2"
        customer={{ userId: "12345" }}
        settings={{
          type: "Contact",
          fields: [
            { label: "Full Name", key: "name" },
            { label: "Email", key: "email" }
          ],
          devMode: true
        }}
        onData={async (results) => {
          setResults(results);
          // post to your API probably too
          return "Done!";
        }}
      >
        Import Contacts
      </FlatfileButton>

      <pre style={{ padding: "20px", background: "#dadada" }}>
        {results ? (
          <ul>
            {results.data.map((record) => (
              <li>
                {record.name} &lt;{record.email}&gt;
              </li>
            ))}
          </ul>
        ) : (
          <div>no data yet</div>
        )}
      </pre>
    </div>
  );
}
