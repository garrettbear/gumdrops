/* globals mount, shallow */
import React from 'react';
import Accordion from '../../components/molecules/Accordion';
import AccordionItem from '../../components/atoms/AccordionItem';

describe('Expect <Accordion>', () => {
    it('to render', () => {
        const props = {
            context: 'primary',
            size: 'sm',
            className: 'cool-stuff'
        };
        const wrapper = mount(
            <Accordion {...props}>
                <AccordionItem label="Accordion Item 1" />
                <AccordionItem label="Accordion Item 2" />
                <AccordionItem label="Accordion Item 3" />
            </Accordion>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('to render expanded', () => {
        const props = {
            isOpen: true
        };
        const wrapper = shallow(
            <Accordion {...props}>
                <AccordionItem label="Accordion Item 1" />
                <AccordionItem label="Accordion Item 2" />
                <AccordionItem label="Accordion Item 3" />
            </Accordion>
        );
        wrapper.find('AccordionItem li').forEach(item => {
            expect(item.hasClass('gds-accordion__item--active')).toBe(true);
        });
        wrapper.setProps({ isOpen: false });
        wrapper.find('AccordionItem li').forEach(item => {
            expect(item.hasClass('gds-accordion__item--active')).toBe(false);
        });
    });
});
