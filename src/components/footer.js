export default function Footer({ name }) {
  return (
    <footer className="p-8 text-xs flex justify-end bg-gray-300">
      <p>&copy; {name}</p>
    </footer>
  );
}
