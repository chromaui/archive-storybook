import { rebuild } from '@chromaui/rrweb-snapshot';
import type { RenderToCanvas, WebRenderer } from '@storybook/types';

const pageUrl = new URL(window.location.href);
pageUrl.pathname = '';
pageUrl.search = '';
const strippedUrl = pageUrl.toString().replace(/\/$/, '');

export const parameters = { server: { url: strippedUrl } };

export interface RRWebFramework extends WebRenderer {
  component: undefined;
  storyResult: Record<string, never>;
}
const renderToCanvas: RenderToCanvas<RRWebFramework> = async (context, element) => {
  const { url, id } = context.storyContext.parameters.server;
  const response = await fetch(`${url}/${id}`);
  const snapshot = await response.json();

  const iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'border: 0; width: 100vw; height: 100vh;');
  element.appendChild(iframe);

  // rebuild is typed incorreclty, cache and mirror are optional
  await rebuild(snapshot, { doc: iframe.contentDocument, cache: null, mirror: null });

  context.showMain();
  return () => {
    element.removeChild(iframe);
  };
};

export { renderToCanvas };
