'use client'
import React, { useState } from 'react';
import { Key, Edit, Trash2 } from 'lucide-react';

// Types
interface Permission {
    id: number;
    name: string;
    description: string;
}

// Mock data
const initialPermissions: Permission[] = [
    { id: 1, name: 'Create User', description: 'Allows creating new users' },
    { id: 2, name: 'Edit User', description: 'Allows editing existing users' },
    { id: 3, name: 'Delete User', description: 'Allows deleting users' },
    { id: 4, name: 'View Reports', description: 'Allows viewing system reports' },
];

export default function PermissionManagement() {
    const [permissions, setPermissions] = useState<Permission[]>(initialPermissions);
    const [editingPermission, setEditingPermission] = useState<Permission | null>(null);

    const handleEditPermission = (permission: Permission) => {
        setEditingPermission(permission);
    };

    const handleDeletePermission = (permissionId: number) => {
        setPermissions(permissions.filter((permission) => permission.id !== permissionId));
    };

    const handleSavePermission = (editedPermission: Permission) => {
        setPermissions(
            permissions.map((permission) =>
                permission.id === editedPermission.id ? editedPermission : permission
            )
        );
        setEditingPermission(null);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Permission Management</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {permissions.map((permission) => (
                            <tr key={permission.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <Key className="h-5 w-5 text-gray-400 mr-2" />
                                        <div className="text-sm font-medium text-gray-900">{permission.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{permission.description}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => handleEditPermission(permission)}
                                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                                    >
                                        <Edit className="h-5 w-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDeletePermission(permission.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {editingPermission && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Edit Permission</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                                const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;

                                handleSavePermission({
                                    ...editingPermission,
                                    name,
                                    description,
                                });
                            }}
                        >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    defaultValue={editingPermission.name}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    defaultValue={editingPermission.description}
                                    rows={3}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
