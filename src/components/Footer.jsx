import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} AI Phone Add-On. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-white" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
