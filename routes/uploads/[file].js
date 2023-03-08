export const handler = {
  GET: (req, _ctx) => {
    const img_path = new URL(req.url).pathname
    return new Response(null, {
      status: 302,
      headers: new Headers({
        Location: `https://api.hyprtxt.dev${img_path}`,
        "Cache-Control": "max-age=3600",
      }),
    })
  },
}
