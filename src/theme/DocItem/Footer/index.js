import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import TagsListInline from "@theme/TagsListInline";
import GiscusComments from '@site/src/components/GiscusComments'; 
import EditMetaRow from "@theme/EditMetaRow";
export default function DocItemFooter() {
  const { metadata } = useDoc();
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags, frontMatter } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
  const showComments = frontMatter.comments;

  if (!canDisplayFooter) {
    return <>
    {showComments && (
        <div style={{ marginTop: "40px" }}>
          <GiscusComments />
        </div>
      )}
      </>;
  }
  return (
    <>
      <footer
        className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
      >
        {canDisplayTagsRow && (
          <div
            className={clsx(
              "row margin-top--sm",
              ThemeClassNames.docs.docFooterTagsRow
            )}
          >
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx(
              "margin-top--sm",
              ThemeClassNames.docs.docFooterEditMetaRow
            )}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </footer>
      {showComments && (
        <div style={{ marginTop: "40px" }}>
          <GiscusComments />
        </div>
      )}
    </>
  );
}
