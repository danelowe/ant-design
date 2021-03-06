import * as React from 'react';
import { mount } from 'enzyme';
import Anchor from '../../components/anchor';

const { Link } = Anchor;

describe('Anchor Render', () => {
  it('Anchor render perfectly', () => {
    const wrapper = mount(
      <Anchor>
        <Link href="#API" title="API" />
      </Anchor>
    );

    wrapper.find('a[href="#API"]').simulate('click');

    wrapper.node.handleScroll();
    expect(wrapper.node.state).not.toBe(null);
  });
});
