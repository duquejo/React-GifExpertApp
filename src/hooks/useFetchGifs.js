/**
 * 
 * use 'prefix' is for hooks indication.
 */

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  /**
   * useEffect updates the state conditionally
   * useState updates all the component
   */

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  /**
   * The effects always expects to be synchronous
   */
  useEffect( () => {

    getGifs( category ).then( imgs => {

      setState({
        data: imgs,
        loading: false
      });
        
    });

  },  [ category ] ); // If the dependencies list is empty, It's only fired ONCE (ComponentDidMount)

  return state; // { data:[], loading: true }
};