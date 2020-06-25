import React from 'react';
import DatePicker from '../components/datePicker.jsx';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Tests for DatePicker Component', () => {
  test('DatePicker renders without crashing', () => {
    const mockFn = jest.fn();
    const options = {
      calendarToggle: mockFn,
      checkin: 'Add a date',
      checkout: 'Add a date',
    }

    const wrapper = shallow(<DatePicker {...options}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
