import React from "react";
function Home() {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<li>Hello {i}</li>);
  }
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}

export default Home;
