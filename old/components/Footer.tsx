import Image from "next/image";
import Link from "next/link";

const navigation = {
  solutions: [
    { name: "Tjänster", href: "/tjanster/" },
    { name: "Rapporter", href: "/affarsrapport/" },
    { name: "Artiklar", href: "/artiklar/" },
    { name: "Kalkylator", href: "/kalkylator/" },
  ],
  support: [
    { name: "SEO", href: "/tjanster/seo/" },
    { name: "SEM", href: "/tjanster/sem/" },
    { name: "CRO", href: "/tjanster/konverteringsoptimering/" },
    { name: "CRM", href: "/tjanster/crm-affars-leadshantering/" },
  ],
  company: [
    { name: "Om oss", href: "/om-oss/" },
    { name: "Sitemap", href: "/sitemap/" },
    { name: "Kontakt", href: "/kontakt/" },
  ],
  legal: [
    { name: "Integritetspolicy", href: "/integritetspolicy/" },
    { name: "Personuppgiftspolicy", href: "/personuppgiftspolicy/" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/new-customers/",
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col items-center space-y-6 lg:items-start">
            <Link href="/">
              <Image
                src="/newcustomers.svg"
                alt="Logo"
                width="240"
                height="36"
                className="h-20"
              />
            </Link>
            <Image
              src="/ntc.png"
              alt="Logo"
              width="650"
              height="148"
              className="w-auto h-20 -mr-20"
            />
            <Image
              src="/SIGILL_SKOLD_VANSTER_STOR_VIT_TEXT.png"
              alt="Logo"
              width="650"
              height="148"
              className="w-auto h-20 -mr-20"
            />
            <Image
              src="/branschvinnare_svensk_2024.png"
              alt="Logo"
              width="650"
              height="148"
              className="w-auto h-20"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8 ">
              <div>
                <h3 className="mt-0 text-sm font-semibold leading-6 text-white">
                  Lösningar
                </h3>
                <ul role="list" className="p-0 mt-5 space-y-4 list-none">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="mt-0 text-sm font-semibold leading-6 text-white">
                  Våra tjänster
                </h3>
                <ul role="list" className="p-0 mt-5 space-y-4 list-none">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="mt-0 text-sm font-semibold leading-6 text-white">
                  Mer om oss
                </h3>
                <ul role="list" className="p-0 mt-5 space-y-4 list-none">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="mt-0 text-sm font-semibold leading-6 text-white">
                  Säkerhet
                </h3>
                <ul role="list" className="p-0 mt-5 space-y-4 list-none">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 mt-10 border-t border-white/10 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-400"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="mt-10 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2024 New Customers Sweden AB All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
