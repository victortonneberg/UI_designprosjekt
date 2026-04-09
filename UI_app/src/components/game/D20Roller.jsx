export default function D20Roller({ onRollComplete }) {
  const handleRoll = () => {
    const result = Math.floor(Math.random() * 20) + 1;
    onRollComplete(result);
  };
  return <button onClick={handleRoll}>Kast D20</button>;
}
