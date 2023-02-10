const realSlot = (defaultSlots: any) =>
  typeof defaultSlots == 'function' ? defaultSlots() : defaultSlots

export { realSlot }
