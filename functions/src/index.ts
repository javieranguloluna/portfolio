import {CallableRequest, onCall} from "firebase-functions/v2/https";
import {Client} from "@notionhq/client";

interface Contact {
  name: string;
  email: string;
  phone: string;
  contactPreference: string;
  message: string;
}

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

exports.submitContact = onCall(async (request: CallableRequest<Contact>) => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  });

  const create = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_DATABASE_ID || ""
    },
    properties: {
      Name: {
        type: "title",
        title: [{ type: "text", text: { content: request.data.name } }]
      },
      Email: {
        type: "email",
        email: request.data.email
      },
      Phone: {
        type: "phone_number",
        phone_number: request.data.phone 
      },
      "Contact Preference": {
        type: "select",
        select: {
          name: request.data.contactPreference
        }
      },
      Message: {
        type: "rich_text",
        rich_text: [{ text: { content: request.data.message } }]
      }
    }
  })

  return create;
});
