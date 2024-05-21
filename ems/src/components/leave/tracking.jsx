import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tracking = () => {
    const [leaveRequests, setLeaveRequests] = useState([]);

    useEffect(() => {
        const fetchLeaveRequests = async () => {
            const response = await axios.get('http://localhost:5000/api/leaveRequests');
            setLeaveRequests(response.data);
        };

        fetchLeaveRequests();
    }, []);

    const handleApproval = async (leaveId, role, action) => {
        if (action === 'approve') {
            await axios.post('http://localhost:5000/approveLeave', { leaveId, role });
        } else {
            await axios.post('http://localhost:5000/declineLeave', { leaveId, role });
        }
        alert(`${role} has ${action}d the leave`);
    };

    return (
        <div>
            <h2>Leave Requests</h2>
            <ul>
                {leaveRequests.map((leave) => (
                    <li key={leave._id}>
                        <p>{leave.employeeName} - {leave.startDate} to {leave.endDate}</p>
                        <p>Status: {leave.status}</p>
                        {leave.approvers.map((approver) => (
                            <div key={approver.role}>
                                <p>{approver.role}: {approver.approved ? 'Approved' : 'Pending'}</p>
                                {!approver.approved && (
                                    <>
                                        <button onClick={() => handleApproval(leave._id, approver.role, 'approve')}>Approve</button>
                                        <button onClick={() => handleApproval(leave._id, approver.role, 'decline')}>Decline</button>
                                    </>
                                )}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tracking;