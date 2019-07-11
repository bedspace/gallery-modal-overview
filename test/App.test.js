import React from 'react';
import App from './../client/src/components/App.jsx';
// import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import sinon from 'sinon';

// Enzyme.configure({ adapter: new Adapter() });
//DONT FORGET TO USE TEST COVERAGE

describe('App exists', () => {

    it('Calls componentDidMount', () => {
        sinon.spy(App.prototype, 'componentDidMount');
        const wrapper = mount(<App/>);
        expect(App.prototype.componentDidMount).toHaveProperty('callCount', 1);
    });

    it('renders 1 <App/> Component', () => {
        const component = shallow(<App/>);
        expect(component).toHaveLength(1);
    });

    it('renders props properly', () => {
        const component = shallow(<App testProp="testing"/>);
        expect(component.instance().props.testProp).toBe('testing');
    });

})

describe('Buttons Activate Modal When Pressed', () => {
    it('Calls activateModal on click and changes ModalActive state to true', () => {
        const wrapper = mount(<App/>);
        const button = wrapper.find('.viewPhoto');
        
        button.simulate('click');
        expect(wrapper.state().modalActive).toBe(true);
    });

});