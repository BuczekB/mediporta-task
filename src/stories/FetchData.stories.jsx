

import { action } from '@storybook/addon-actions';


import FetchData from '../Data/FetchData';


export default {
  title: 'Components/FetchData',
  component: FetchData,
} 


const Template  = (args) => <FetchData {...args} />;

export const Default = Template.bind({});
Default.args = {
  setData: action('setData'), 
  paginationNumb: 1,
  numberOfItems: 6,
  sort: 'name',
  serch: 'search',
  setErrorPage: action('setErrorPage'), 
};