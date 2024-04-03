

import CustomList from '../Components/CustomList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/CustomList',
  component: CustomList,
} 

const Template = (args) => <CustomList {...args} />;

export const Default = Template.bind({});
Default.args = {
    handleInputChange: action('handleInputChange'),
    handleChange: action('handleChange'),
    handleSerch: action('handleSerch'),
    numberOfItems: 10,
    sort: 'Name',
};