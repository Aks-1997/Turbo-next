import {LoadingSpinner} from '../../Loader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Loader',
  component: LoadingSpinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
//   More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    isLoading: { control: 'text' },
  },
};

export const PrimaryLoader = {
    args: {
        isLoading: true
    },
  };