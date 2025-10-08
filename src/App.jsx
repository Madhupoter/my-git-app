import React from "react";

function App() {
  const sectionStyle = {
    padding: "40px",
    margin: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  const headingStyle = {
    fontSize: "24px",
    color: "#232f3e",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh", padding: "20px" }}>
      {/* Amazon Section */}
      <section style={{ ...sectionStyle, borderLeft: "6px solid #ff9900" }}>
        <h2 style={headingStyle}>Amazon</h2>
        <p style={textStyle}>
          Amazon is one of the world’s largest e-commerce platforms, offering a vast selection of
          products ranging from electronics and fashion to groceries and entertainment. Known for
          its fast delivery, user-friendly interface, and Prime membership benefits, Amazon continues
          to redefine online shopping experiences globally.
        </p>
      </section>

      {/* Flipkart Section */}
      <section style={{ ...sectionStyle, borderLeft: "6px solid #2874f0" }}>
        <h2 style={{ ...headingStyle, color: "#2874f0" }}>Flipkart</h2>
        <p style={textStyle}>
          Flipkart is one of India’s leading online marketplaces, known for offering affordable prices,
          great discounts, and a wide range of products. With its “Big Billion Days” sale and focus on
          customer satisfaction, Flipkart has become a household name in India’s e-commerce landscape.
        </p>
      </section>
    </div>
  );
}

export default App;
