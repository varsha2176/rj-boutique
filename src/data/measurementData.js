// Pre-defined Size Charts
export const sizeCharts = {
  women: {
    XS: { bust: '32', waist: '24', hip: '34', shoulder: '14', sleeveLength: '22', length: '38' },
    S: { bust: '34', waist: '26', hip: '36', shoulder: '15', sleeveLength: '23', length: '40' },
    M: { bust: '36', waist: '28', hip: '38', shoulder: '15.5', sleeveLength: '23.5', length: '42' },
    L: { bust: '38', waist: '30', hip: '40', shoulder: '16', sleeveLength: '24', length: '44' },
    XL: { bust: '40', waist: '32', hip: '42', shoulder: '16.5', sleeveLength: '24.5', length: '46' },
    XXL: { bust: '42', waist: '34', hip: '44', shoulder: '17', sleeveLength: '25', length: '48' },
  },
  kids: {
    XS: { chest: '22', waist: '20', hip: '24', shoulder: '10', sleeveLength: '16', length: '24' },
    S: { chest: '24', waist: '21', hip: '26', shoulder: '11', sleeveLength: '17', length: '26' },
    M: { chest: '26', waist: '22', hip: '28', shoulder: '12', sleeveLength: '18', length: '28' },
    L: { chest: '28', waist: '23', hip: '30', shoulder: '13', sleeveLength: '19', length: '30' },
    XL: { chest: '30', waist: '24', hip: '32', shoulder: '14', sleeveLength: '20', length: '32' },
  },
  pets: {
    XS: { neckCircumference: '8', chestGirth: '12', backLength: '10' },
    S: { neckCircumference: '10', chestGirth: '14', backLength: '12' },
    M: { neckCircumference: '12', chestGirth: '16', backLength: '14' },
    L: { neckCircumference: '14', chestGirth: '18', backLength: '16' },
    XL: { neckCircumference: '16', chestGirth: '20', backLength: '18' },
  },
}

// Measurement Field Labels
export const measurementFields = {
  women: [
    { id: 'bust', label: 'Bust / Chest', hint: 'Around fullest part' },
    { id: 'waist', label: 'Waist', hint: 'Narrowest part' },
    { id: 'hip', label: 'Hip', hint: 'Fullest part' },
    { id: 'shoulder', label: 'Shoulder Width', hint: 'Edge to edge' },
    { id: 'sleeveLength', label: 'Sleeve Length', hint: 'Shoulder to wrist' },
    { id: 'length', label: 'Length', hint: 'Shoulder to end' },
    { id: 'armHole', label: 'Arm Hole (Optional)', hint: 'Around armhole' },
  ],
  kids: [
    { id: 'chest', label: 'Chest', hint: 'Around fullest part' },
    { id: 'waist', label: 'Waist', hint: 'Narrowest part' },
    { id: 'hip', label: 'Hip', hint: 'Fullest part' },
    { id: 'shoulder', label: 'Shoulder Width', hint: 'Edge to edge' },
    { id: 'sleeveLength', label: 'Sleeve Length', hint: 'Shoulder to wrist' },
    { id: 'length', label: 'Length', hint: 'Shoulder to end' },
  ],
  pets: [
    { id: 'neckCircumference', label: 'Neck Circumference', hint: 'Around neck base' },
    { id: 'chestGirth', label: 'Chest Girth', hint: 'Widest part' },
    { id: 'backLength', label: 'Back Length', hint: 'Neck to tail base' },
  ],
}

// Measurement Tips
export const measurementTips = [
  'Keep measuring tape parallel to the ground',
  'Don\'t pull the tape too tight - it should be snug but comfortable',
  'Wear innerwear similar to what you\'ll wear with the final outfit',
  'Stand straight and relaxed while measuring',
  'If unsure, it\'s better to give slightly larger measurements',
]