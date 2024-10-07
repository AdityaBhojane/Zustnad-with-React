import { create } from "zustand";

export const useStore = create(set =>({
    count:1,
    increase: ()=> set(state => ({count:state.count +1})),
    decrease: ()=> set(state => ({count:state.count +1})),
}));

