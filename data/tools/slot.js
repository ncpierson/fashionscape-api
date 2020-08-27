const Slot = config => {
  const slots = {
    oldschool: [
      {category: 'Ammunition_slot_items', key: 'ammunition'},
      {category: 'Body_slot_items', key: 'body'},
      {category: 'Cape_slot_items', key: 'cape'},
      {category: 'Feet_slot_items', key: 'feet'},
      {category: 'Hands_slot_items', key: 'hand'},
      {category: 'Head_slot_items', key: 'head'},
      {category: 'Legs_slot_items', key: 'leg'},
      {category: 'Neck_slot_items', key: 'neck'},
      {category: 'Ring_slot_items', key: 'ring'},
      {category: 'Shield_slot_items', key: 'shield'},
      {category: 'Two-handed_slot_items', key: 'weapon'},
      {category: 'Weapon_slot_items', key: 'weapon'},
    ],
    runescape: [
      {category: 'Ammunition_slot_items', key: 'ammunition'},
      {category: 'Back_slot_items', key: 'back'},
      {category: 'Feet_slot_items', key: 'feet'},
      {category: 'Hand_slot_items', key: 'hand'},
      {category: 'Head_slot_items', key: 'head'},
      {category: 'Legs_slot_items', key: 'leg'},
      {category: 'Main_hand_slot_items', key: 'main_hand'},
      {category: 'Neck_slot_items', key: 'neck'},
      {category: 'Off-hand_slot_items', key: 'off-hand'},
      {category: 'Pocket_slot_items', key: 'pocket'},
      {category: 'Rings', key: 'ring'},
      {category: 'Sigil_slot_items', key: 'sigil'},
      {category: 'Torso_slot_items', key: 'torso'},
      {category: 'Two-handed_slot_items', key: 'two-handed'},
    ],
  }[config.release];

  const categories = slots.map(slot => slot.category);

  const toSlot = categories => {
    const category = categories.find(c => c.includes('slot'));
    const slot = slots.find(slot => slot.category === category);

    return slot.key;
  };

  return {categories, toSlot};
};

module.exports = Slot;
