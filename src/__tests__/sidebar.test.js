import Sidebar from '../containers/sidebar.container';
import Toggle from '../components/toggle.component';
// - - - - - - - - - - - - - - - - - - - - - 
// using Enzyme to step through the DOM tree
// - - - - - - - - - - - - - - - - - - - - - 

// Shallow 

it("renders correctly", () => {
  const wrapper = shallow(
    <Sidebar click={ () => {} } open={ false } />
  );
  expect(wrapper).toMatchSnapshot();
});


// Rendered ie. HTML child

it("renders correctly again", () => {
  const wrapper = render(
    <Sidebar click={ () => {} } open={ false } />
  );
  expect(wrapper).toMatchSnapshot();
});


// Content ie Text

it("displays text", () => {
  const wrapper = mount(
    <Sidebar click={ () => {} } open={ false } />
  );

  const text = wrapper.find('nav').text();

  console.log(text);
  expect(text).toEqual("Navigation");
});


// Functionality (toggle.component.js)

it('renders correctly', () => {
  const wrapper = shallow(
    <Toggle click={ () => {} } label='<' />
  );

  expect(wrapper).toMatchSnapshot();
});



it('responds to toggle click', () => {
  const spy = sinon.spy();
  const wrapper = mount(
    <Toggle click={ spy } label='>' />
  );
  
  wrapper
    .simulate('click');
    console.log(spy.calledOnce);
  expect(spy.calledOnce).toBe(true);
});


