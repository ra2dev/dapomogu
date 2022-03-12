export const Button = ({ text, type }) => {
  const className = {}[type || "default"];
  return <button className="rounded bg-red-500">SAVE</button>;
};
