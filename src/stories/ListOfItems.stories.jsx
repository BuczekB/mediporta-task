

// Import komponentu ListOfItems
import ListOfItems from '../Components/ListOfItems';

// Import kontekstu danych
import { DataContext } from '../Data/DataContext';

// Definicja meta danych dla story
export default {
  title: 'Components/ListOfItems',
  component: ListOfItems,
} 

// Tworzymy przykładowe dane do przekazania do komponentu
const exampleData = {
  data: {
    items: [
      { name: 'Example Name ', count: 110 },
      { name: 'Example Name ', count: 220 },
      { name: 'Example Name ', count: 330 },
    ],
  },
};

// Przykładowy case użycia dla story z dodanymi danymi z useContext
const Template = (args) => (
  <DataContext.Provider value={exampleData}>
    <ListOfItems {...args} />
  </DataContext.Provider>
);

export const Default = Template.bind({});