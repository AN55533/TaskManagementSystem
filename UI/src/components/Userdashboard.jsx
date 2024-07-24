import React from 'react'

const Userdashboard = () => {
  return (
    
      <div class="flex-1">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-lg font-semibold mb-2">User Details</h2>
                <div class="text-gray-600">
                    <p><span class="font-semibold">Username:</span> John Doe</p>
                    <p><span class="font-semibold">Email:</span> john.doe@example.com</p>
                    <p><span class="font-semibold">Role:</span> user</p>
                    {/* <!-- Add more user details as needed --> */}
                </div>
            </div>

            {/* <!-- Additional Content (Tasks Overview, Task List, etc.) --> */}
            <div class="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 class="text-lg font-semibold mb-2">Tasks Overview</h2>
                <div class="text-gray-600">Total: 5</div>
                {/* <!-- Add more task-related details --> */}
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 class="text-lg font-semibold mb-4">Your Tasks</h2>
                <table class="min-w-full border-collapse border border-gray-300">
                    <thead class="bg-gray-200">
                        <tr>
                            <th class="border border-gray-300 px-4 py-2">Title</th>
                            <th class="border border-gray-300 px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Task A</td>
                            <td class="border border-gray-300 px-4 py-2">In Progress</td>
                        </tr>
                        {/* <!-- Add more rows dynamically --> */}
                    </tbody>
                </table>
            </div>
        </div>
    
    
  )
}

export default Userdashboard
