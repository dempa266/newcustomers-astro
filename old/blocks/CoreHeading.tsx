type Props = {
  data: {
    parentClientId: string;
  };
  renderedHtml: string;
};
export default function CoreHeading(props: Props) {
  return (
    <div
      className="heading"
      dangerouslySetInnerHTML={{ __html: props.renderedHtml }}
    ></div>
  );
}

export const CoreHeadingFragment = `
  ... on CoreHeading {
      renderedHtml
      parentClientId
      clientId
  }
  `;
