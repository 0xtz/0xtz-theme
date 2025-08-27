import type React from "react";
import { useState, useEffect } from "react";

interface Item {
  id: number;
  name: string;
}

export default function AndromedaThemeShowcase() {
  const [count, setCount] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "First Item" },
    { id: 2, name: "Second Item" },
  ]);
  const API_URL: string = "https://api.example.com/data";

  useEffect(() => {
    // Single-line comment
    console.log(`Component mounted or count changed: ${count}`);

    /*
     * Multi-line
     * comment block
     */
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setItems((prevItems) => [...prevItems, ...data]);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching data:", error.message);
        } else {
          console.error("An unknown error occurred:", error);
        }
      }
    };

    fetchData();

    return () => {
      console.log("Component unmounted or count changed.");
    };
  }, [count]);

  const handleIncrement = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const renderItems = (): React.JSX.Element[] => {
    return items.map((item) => (
      <li key={item.id} style={{ color: "#00e8c6" }}>
        {item.name}
      </li>
    ));
  };

  return (
    <div className="andromeda-container">
      <h1>0xtz Theme React Showcase</h1>
      <p>
        Current Count: <span className="count-display">{count}</span>
      </p>
      <button onClick={handleIncrement} type="button">
        Increment Count
      </button>

      <h2>Items:</h2>
      <ul>{renderItems()}</ul>

      {/* This is a JSX comment */}
      {/**
       * Another multi-line JSX comment
       */}

      <p>
        API URL:{" "}
        <a href={API_URL} target="_blank" rel="noopener noreferrer">
          {API_URL}
        </a>
      </p>
    </div>
  );
}
