import produce from "immer";
import create, { State, StateCreator } from "zustand";
import { Actions } from "./clientStore.actions";
import { ClientDispatch } from "./clientStore.dispatch";
import { initialClientState } from "./clientStore.draft";
import reducer from "./clientStore.reducer";
import { ClientDraft } from "./clientStore.types";

const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: T) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce(fn) as (state: T) => T), get, api);

export const useStore = create<ClientDraft & ClientDispatch>(
  immer((set) => ({
    ...initialClientState,
    dispatch: (args: Actions) => set((state) => reducer(state, args)),
  }))
);
