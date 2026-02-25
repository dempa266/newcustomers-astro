import Client from "../utils/Client";

type Props = {
  data: {
    renderedHtml: string;
  };
};

async function getData() {
  const pageQuery = `
    query GetPages {
      pages(first: 200) {
        nodes {
          uri
          date
          title
          pageId
        }
      }
    }
  `;
  const postQuery = `
  query GetPages {
    posts(first: 200) {
      nodes {
        uri
        date
        title
        postId
      }
    }
  }
`;
  const pageData = await Client(pageQuery);
  const postData = await Client(postQuery);

  // Combine the page and post data into a single array
  const pages = pageData.pages.nodes;
  const posts = postData.posts.nodes;
  const combinedData = pages.concat(posts);

  return combinedData;
}

export default async function CorePageList(props: Props) {
  const pages = await getData();

  return (
    <div className="max-w-7xl mx-auto px-8">
      {pages.map((page: any) => (
        <div key={page.pageId || page.postId}>
          <a href={page.uri}>{page.title}</a>
        </div>
      ))}
    </div>
  );
}

export const CorePageListFragment = `
... on CorePageList {
    name
}
`;
