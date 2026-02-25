import React from "react";

type Props = {
  breadcrumbs: [{ url: string; text: string }];
};

export default function Breadcrumbs({ breadcrumbs }: Props) {
  function replaceDomain(url: string) {
    return url.replace("wp.newcustomers.se", "newcustomers.se");
  }
  return (
    <nav
      aria-label="Breadcrumb"
      itemScope
      itemType="http://schema.org/BreadcrumbList"
    >
      <ol className="flex mx-0 px-0 space-x-2 list-none text-gray-400">
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <li
              className="my-0"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === breadcrumbs.length - 1 ? (
                // Render as text for the last breadcrumb
                <span className=" text-sm" itemProp="name">
                  {breadcrumb.text}
                </span>
              ) : (
                // Render as link for other breadcrumbs
                <a itemProp="item" href={replaceDomain(breadcrumb.url)}>
                  <span
                    className="text-gray-500 text-sm hover:text-primary transition"
                    itemProp="name"
                  >
                    {breadcrumb.text}
                  </span>
                </a>
              )}
              <meta itemProp="position" content={(index + 1).toString()} />
            </li>
            {index < breadcrumbs.length - 1 && (
              <li
                aria-hidden="true"
                className="text-grayLight mx-2 list-none my-auto text-sm "
              >
                /
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
