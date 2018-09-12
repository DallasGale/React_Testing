import Sidebar from '../containers/sidebar.container';
import Links from '../components/links.component';
import SidebarComponent from '../components/sidebar.component';
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




describe('<SidebarComponent />', () => {
  
  it('renders correctily', () => {
    const wrapper = shallow(<SidebarComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders 3 <Links /> components', () => {
    const wrapper = shallow(<SidebarComponent />);
    expect(wrapper.find(Links).length).toBe(3);
  });
});




 