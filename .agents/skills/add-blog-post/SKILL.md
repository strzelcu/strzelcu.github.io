---
name: add-blog-post
description: Use to prepare, add, or publish a new article on the Programista na wsi blog in strzelcu/strzelcu.github.io.
---

# Add a blog post

1. Read the repository's AGENTS.md, README.md, and Contentlayer blog schema. Inspect a recent post for frontmatter, headings, links, and image conventions.
2. Create one .mdx file per post in data/blog/ with a unique, descriptive slug. Use title and date in frontmatter, and follow the existing conventions for tags and summary. Keep the article's language and voice, and use second-level headings for sections.
3. Put supplied images under public/static/images/ in a folder for the post. Reference each image from its section with descriptive alt text and confirm the file exists. If the author is still providing images, wait before publishing.
4. Check the changed paths and run yarn lint and EXPORT=1 UNOPTIMIZED=1 yarn build where available. Confirm the build exports the article route and includes its images.
5. Follow the repository's commits skill. When publication is requested and the post is ready, commit the article and its images together on main using the repository's normal workflow. Check that the GitHub Pages workflow succeeds, then open the live article and verify its images before reporting the URL.
