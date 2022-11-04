export const Top = () => {
  const scrollToView = () => {
    const bottom = document.querySelector(".bottom");
    bottom.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div className="top">
      <span>Hello </span>
      <button onClick={scrollToView}>Click me</button>
    </div>
  );
};
