import {onCall} from "firebase-functions/v2/https";
import {Client} from "@notionhq/client";

exports.getNotionPage = onCall(async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const page = await notion.pages.retrieve({
    page_id: process.env.NOTION_PAGE_ID || "",
  });
  const blocks = await notion.blocks.children.list({
    block_id: process.env.NOTION_PAGE_ID || "",
  });

  return {page, blocks};
});
