export default function Footer() {
  return (
    <footer className="py-2 bg-neutral-50 border-t-4 border-gray-100 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col justify-center items-center py-2">
        <div className="md:flex md:justify-between">
          <div className="grid grid-row-2 gap-8 md:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="https://operadora.legal/" className="hover:underline">LegalAI</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="flex flex-col gap-4 text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="https://www.facebook.com/operadoralegal" className="hover:underline ">Facebook</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@universolegal" className="hover:underline">Youtube</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/operadoralegal/" className="hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@universolegal" className="hover:underline">TikTok</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="flex flex-col gap-4 text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://operadora.legal/" className="hover:underline">LegalAI™</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  );
}