type Props = {
  data: {
    content: string;
    cssClassName: string;
  };
};
export default function CoreParagraph(props: Props) {
  return (
    <p
      className={props.data.cssClassName}
      dangerouslySetInnerHTML={{ __html: props.data.content }}
    ></p>
  );
}

export const CoreParagraphFragment = `
... on CoreParagraph {
    apiVersion
    blockEditorCategoryName
    attributes {
      content
      cssClassName
    }
}
`;
