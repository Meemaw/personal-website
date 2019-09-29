import React from 'react';
import { render, waitForElement } from '@testing-library/react';

import HomePage from './index';

describe('HomePage', () => {
  it('Should render static <TechnologyCard />s', () => {
    const { queryByText } = render(<HomePage />);

    expect(
      queryByText(
        'I value code reusability, clear design principles and attention for performance.',
      ),
    ).toBeInTheDocument();

    expect(
      queryByText(
        'Putting User Experience (UX) in the foreground while designing web applications.',
      ),
    ).toBeInTheDocument();

    expect(
      queryByText(
        'Giving special attetion to database design and its scalability. I enjoy databse optimizations for any kind of performance gains.',
      ),
    ).toBeInTheDocument();
  });

  it('Should render most starred Github repositories', async () => {
    const MOST_STARRED_REPO = 'Meemaw/react-micro-modal';

    const { queryByText, container } = render(<HomePage />);
    expect(queryByText('Most starred repos')).toBeInTheDocument();

    await waitForElement(() => queryByText(MOST_STARRED_REPO));

    const reposElement = container.querySelector('div.Repos') as HTMLElement;
    expect(reposElement.childElementCount).toEqual(4); // show top 3 repositories (1 is header element)
  });
});
