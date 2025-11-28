import { define } from "@/utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Matt de Young</title>
        <meta
          name="description"
          content="Hands-on software engineering leader & veteran web developer"
        />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
