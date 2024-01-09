import { readFileSync } from 'fs';
import type { StoryIndexer, Parameters, IndexedStory } from '@storybook/types';
import { toId } from '@storybook/csf';

// TODO maybe check if experimental_indexers is part of the StoryIndexer and
// use the new API below
// https://storybook.js.org/docs/api/main-config-indexers

// Also this may require a custom loader too, see notion doc

export const storyIndexers = (indexers: StoryIndexer[]): StoryIndexer[] => {
  const jsonIndexer: StoryIndexer['indexer'] = async (fileName, { makeTitle }) => {
    const json = JSON.parse(readFileSync(fileName, 'utf8'));

    const title = makeTitle(json.title);
    const meta = {
      title,
    };

    // TODO add parameters to stories
    const stories: IndexedStory[] = json.stories.map((story: { name: string }) => {
      const id = toId(meta.title, story.name);
      const { name } = story;
      const indexedStory: IndexedStory = {
        id,
        name,
      };
      return indexedStory;
    });
    console.log('returning', { meta, stories });
    return {
      meta,
      stories,
    };
  };

  // TODO rename stories2
  return [
    {
      test: /(stories2|story)\.json$/,
      indexer: jsonIndexer,
    },
    ...(indexers || []),
  ];
};
