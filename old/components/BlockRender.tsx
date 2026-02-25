import React from "react";
import { blocks } from "../blocks";

type Props = {
  blocksArray: any[];
  showInnerBlocks?: boolean;
  seo?: any;
};

export default function BlockRender({
  blocksArray,
  showInnerBlocks = false,
  seo,
}: Props) {
  return (
    <>
      {blocksArray.map((block: any, i: number) => {
        const BlockComponent = blocks[block.name];
        if (!BlockComponent) {
          // If the block has parentClientId, it's an inner block do not render it
          if (!block.parentClientId) {
            return (
              <div
                key={i}
                className="px-6 mx-auto max-w-7xl lg:px-8"
                dangerouslySetInnerHTML={{ __html: block.renderedHtml }}
              ></div>
            );
          } else {
            return null;
          }
        }
        // Find the inner blocks based on block.clientId and block.parentClientId
        const innerBlocks = blocksArray.filter(
          (innerBlock) =>
            innerBlock.parentClientId === block.clientId &&
            innerBlock.clientId !== block.clientId
        );

        if (showInnerBlocks || !block.parentClientId) {
          return (
            <BlockComponent
              key={block.clientId}
              data={block.attributes}
              renderedHtml={block.renderedHtml}
              seo={seo}
              innerBlocks={innerBlocks}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
}
