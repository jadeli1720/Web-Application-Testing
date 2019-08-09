import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it(' render without crashing', () => {
        render(<Dashboard />);
    });

    //strike
    it('strike', () => {
        //destructuring
        let clicked = false;
        const  { getByText }  = render(<Dashboard strike={() => clicked = true} />);
        const strikesButton = getByText(/strike/i);
        fireEvent.click(strikesButton);
        expect(clicked).toBe(true);
    });

    it('strike with mocked function', () => {
        const click = jest.fn();
        const  { getByText }  = render(<Dashboard strike={click} />);
        const strikesButton = getByText(/strike/i);
        fireEvent.click(strikesButton);
        expect(click).toBeCalled();
    });

    //Ball
    it('ball', () => {
        //destructuring
        let clicked = false;
        const  { getByText }  = render(<Dashboard ball={() => clicked = true} />);
        const ballsButton = getByText(/ball/i);
        fireEvent.click(ballsButton);
        expect(clicked).toBe(true);
    });

    it('ball with mocked function', () => {
        const click = jest.fn();
        const  { getByText }  = render(<Dashboard ball={click} />);
        const ballsButton = getByText(/ball/i);
        fireEvent.click(ballsButton);
        expect(click).toBeCalled();
    });

    //Foul
    it('foul', () => {
        //destructuring
        let clicked = false;
        const  { getByText }  = render(<Dashboard foul={() => clicked = true} />);
        const foulsButton = getByText(/foul/i);
        fireEvent.click(foulsButton);
        expect(clicked).toBe(true);
    });

    it('foul with mocked function', () => {
        const click = jest.fn();
        const  { getByText }  = render(<Dashboard foul={click} />);
        const foulsButton = getByText(/foul/i);
        fireEvent.click(foulsButton);
        expect(click).toBeCalled();
    });

        //Hit
        it('hit', () => {
            //destructuring
            let clicked = false;
            const  { getByText }  = render(<Dashboard hit={() => clicked = true} />);
            const hitsButton = getByText(/hit/i);
            fireEvent.click(hitsButton);
            expect(clicked).toBe(true);
        });
    
        it('hit with mocked function', () => {
            const click = jest.fn();
            const  { getByText }  = render(<Dashboard hit={click} />);
            const hitsButton = getByText(/hit/i);
            fireEvent.click(hitsButton);
            expect(click).toBeCalled();
        });
});