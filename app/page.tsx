import React from 'react'
import { Users, Shield, Key } from 'lucide-react'

const stats = [
  { name: 'Total Users', value: 120, icon: Users },
  { name: 'Total Roles', value: 5, icon: Shield },
  { name: 'Total Permissions', value: 25, icon: Key },
]

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <stat.icon className="w-12 h-12 text-blue-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

