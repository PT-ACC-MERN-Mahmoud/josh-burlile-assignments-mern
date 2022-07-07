import {useState} from "react";
import './App.css';
import Tabs from "./components/Tabs";
import Content from "./components/Content";

function App() {
  const [items, setItems] = useState([
    { label: "Tab 1", content: "Item 1 content is selected", isActive: true },
    { label: "Tab 2", content: "Item 2 content is selected", isActive: false },
    { label: "Tab 3", content: "Item 3 content is selected", isActive: false },
  ]);
  const [content, setContent] = useState(items[0].content);

  return (
    <div className="App container">
      <Tabs items={items} setContent={setContent} />
      <Content content={content}/>
    </div>
  );
}

export default App;
