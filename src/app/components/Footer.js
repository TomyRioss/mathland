export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-700 bg-gradient-to-r from-amber-50 via-white to-amber-50 mt-auto text-sm border-t border-amber-200/30">
      <span className="block mb-2">
        © {new Date().getFullYear()} MathLand. All rights reserved.
      </span>
      <span className="text-xs text-amber-600">
        Made with love to pontentiate mathematical thinking.
      </span>
    </footer>
  );
}
