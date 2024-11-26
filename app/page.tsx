'use client'
import React from 'react'
import { Users, Shield, Key } from 'lucide-react'
import { motion } from 'framer-motion'
import { DashboardStat } from '@/types'
import useMain from '@/context/MainContext'



export default function Dashboard() {
  const { users, permissions, roles } = useMain();
  const stats: DashboardStat[] = [
    { name: 'Total Users', value: users.length, icon: Users },
    { name: 'Total Roles', value: roles.length, icon: Shield },
    { name: 'Total Permissions', value: permissions.length, icon: Key },
  ]
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
              </div>
              <stat.icon className="w-12 h-12 text-blue-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

