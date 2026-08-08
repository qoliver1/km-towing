interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    const prefix = '/kmtow-test-page'
    
    if (url.pathname.startsWith(prefix)) {
      url.pathname = url.pathname.slice(prefix.length) || '/'
    }

    return env.ASSETS.fetch(new Request(url, request))
  },
}