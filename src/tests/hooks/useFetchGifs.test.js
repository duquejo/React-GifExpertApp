import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Unit tests pon useFetchGifs hook', () => {
  
  test('Should return the initial state', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One punch' ) ); // Simulate a hook render
    const { data, loading } = result.current;

    await waitForNextUpdate(); // Wait for the next effects and the next state actions

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();
  });

  test('Should return an imgs array and loading state in false', async () => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One punch' ) ); // Simulate a hook render simulating a promise 

    await waitForNextUpdate(); // Wait for the next effects and the next state actions

    const { data, loading } = result.current;

    expect( data.length ).toEqual(10);
    expect( loading ).toBeFalsy();
  });
  
  
});