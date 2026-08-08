interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    url.pathname = url.pathname.replace(/^\/(kmtow-test-page|kmtow)/, '') || '/'

    return env.ASSETS.fetch(new Request(url, request))
  },
}