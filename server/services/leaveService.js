const Leave = require('../models/leaveManagement');

// Calculate balance leaves
const calculateBalanceLeaves = async (employeeId) => {
  const leaveRecord = await Leave.findOne({ employeeId });
  if (!leaveRecord) throw new Error('Leave record not found');

  const balanceLeaves = leaveRecord.totalLeaves - leaveRecord.leavesTaken;
  return balanceLeaves < 0 ? 0 : balanceLeaves;
};

// Calculate LOP (Leave of Absence)
const calculateLOP = async (employeeId) => {
  const leaveRecord = await Leave.findOne({ employeeId });
  if (!leaveRecord) throw new Error('Leave record not found');

  const balanceLeaves = await calculateBalanceLeaves(employeeId);
  const lop = leaveRecord.leavesTaken - leaveRecord.totalLeaves;
  leaveRecord.lop = lop > 0 ? lop : 0;

  await leaveRecord.save();
  return leaveRecord.lop;
};

module.exports = {
  calculateBalanceLeaves,
  calculateLOP
};