import React from "react";
import "./Tab.css";

const Tabs = (props) => {
    const {items, setItems} = props;
    const [activeTab, setActiveTab] = useState("Tab 1");
    const handleClick = (selectedItem) => {
        setActiveTab(selectedItem.title);
        setItems(selectedItem.content);
    };
    return (
        <div>
            {items.map((item) => (
                <button 
                key={item.label} 
                onClick={() => handleClick(item)} 
                className={item.label === activeTab ? "active" : ""}>
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;