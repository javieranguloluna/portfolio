import {onCall} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import {defineSecret} from "firebase-functions/params";

import {Client} from "@notionhq/client";

const NOTION_SECRET = defineSecret("NOTION_SECRET");
const NOTION_PAGE_ID = defineSecret("NOTION_PAGE_ID");

const notion = new Client({
  auth: NOTION_SECRET.value(),
});

exports.getNotionPage = onCall(() => {
  return notion.pages.retrieve({
    page_id: NOTION_PAGE_ID.value(),
  });
});
