import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  favicons: ["/favicon.png"],
  metas: [
    {
      name: "keywords",
      content: "CC.AI, 草船科技, 工业人工智能",
    },
    {
      name: "title",
      content: "草船科技—工业人工智能先行者",
    },
    {
      name: "description",
      content: "为中国40万家工业企业落地人工智能解决方案",
    },
  ],
});
