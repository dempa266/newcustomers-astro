"use client";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Client from "@/app/utils/Client";

type ChildItem = {
  id: string;
  path: string;
  label: string;
  parentId: string;
};

type Props = {
  title: string;
  resources: ChildItem[];
  engagement: ChildItem[];
};

export default function Dropdown({
  title,
  resources = [],
  engagement = [],
}: Props) {
  // Query for posts using wp-graphql and the GraphQL API
  const [posts, setPosts] = useState([]);
  const query = `
    query getPosts($title: String!) {
      posts(first: 2, where: {categoryName: $title}) {
        nodes {
          id
          title
          excerpt
          date
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;
  useEffect(() => {
    const fetchData = async () => {
      const data = await Client(query, { title });
      setPosts(data.posts.nodes);
    };
    fetchData();
  }, []);

  return (
    <Popover as="li" className="relative mb-0">
      {({ open }) => (
        <>
          <Popover.Button className="inline-flex items-center text-sm leading-6 text-white gap-x-1 hover:text-primary">
            <span>{title}</span>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 fixed">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-5xl grid grid-cols-2 p-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-gray-500">
                      Så jobbar vi med {title}
                    </h3>
                    <div className="flow-root mt-5">
                      <div className="-my-2">
                        {engagement
                          .filter((node: any) => node.description === null)
                          .map((item: ChildItem) => (
                            <a
                              key={item.id}
                              href={item.path}
                              className="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4"
                            >
                              {item.label}
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium leading-6 text-gray-500">
                      Mer om {title}
                    </h3>
                    <div className="flow-root mt-5">
                      <div className="-my-2">
                        {resources
                          .filter((node: any) => node.description === "Mer")
                          .map((item: ChildItem) => (
                            <a
                              key={item.id}
                              href={item.path}
                              className="flex py-2 text-sm font-semibold leading-6 text-gray-900 gap-x-4"
                            >
                              {item.label}
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                {posts.length > 0 && (
                  <div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
                    <h3 className="sr-only">Recent posts</h3>
                    {posts.map((post: any) => (
                      <article
                        key={post.id}
                        className="relative flex flex-col max-w-2xl isolate gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
                      >
                        <div className="relative flex-none">
                          <img
                            className="aspect-[2/1] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[16/9] sm:h-32 lg:h-auto"
                            src={post.featuredImage.node.sourceUrl}
                            alt=""
                          />
                          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div>
                          <div className="flex items-center gap-x-4">
                            <a
                              href="#"
                              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
                            >
                              {post.categories.nodes[0].name}
                            </a>
                          </div>
                          <h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
                            <a href={post.uri}>
                              <span className="absolute inset-0" />
                              {post.title}
                            </a>
                          </h4>
                          <div className="mt-2 text-sm leading-6 text-gray-600">
                            {post.excerpt
                              .replace(/(<([^>]+)>)/gi, "")
                              .slice(0, 150)}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
