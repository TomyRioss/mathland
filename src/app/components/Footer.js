export default function Footer() {
  return (
    <footer className="py-8 text-center text-purple-200 bg-gradient-to-r from-gray-950 via-purple-950 to-gray-900 mt-auto text-sm border-t border-purple-800/30">
      <span className="block mb-2">
        © {new Date().getFullYear()} MathLand. All rights reserved.
      </span>
      <span className="text-xs text-purple-400">
        Made with ❤️ for math lovers
      </span>
    </footer>
  );
}
