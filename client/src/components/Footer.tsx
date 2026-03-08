import { footerLinks } from '@/data/links.ts'

function Footer() {

  return (
    <footer className="bg-darkbg p-8 border-t border-gray-600">
      <ul className="footer-links flex gap-4 justify-center items-center flex-wrap mb-3">
        {footerLinks.map((link) => (
          <li
            key={link.id}
            className='text-gray-400 text-xs hover:underline cursor-pointer'
          >
            {link.name}
          </li>
        ))}
      </ul>

      <div className="copyright text-gray-400 text-xs flex justify-center items-center mb-2 p-3">
        © 2026 Sajin C L. All rights reserved.
      </div>
    </footer>
  )
};

export default Footer;