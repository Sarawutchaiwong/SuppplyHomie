'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const res = await axios.get('/api/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.user) {
          setUser(res.data.user);
        } else {
          router.push('/login');
        }
      } catch (error: any) {
        console.error(error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
              <nav className="space-y-2">
                <a href="#" className="block text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md">
                  Order History
                </a>
                <a href="#" className="block text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md">
                  Wishlist
                </a>
                <a href="#" className="block text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md">
                  Account Settings
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">User Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Name</label>
                  <p className="text-gray-800">{user.name}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email</label>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Address</label>
                  <p className="text-gray-800">123 Main St, Anytown, USA</p>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <p className="text-gray-800">(123) 456-7890</p>
                </div>
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
              <div className="space-y-4">
                {/* Placeholder for Order History */}
                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">Order #12345</p>
                    <p className="text-sm text-gray-600">Date: 2023-07-23</p>
                  </div>
                  <p className="font-bold">$99.99</p>
                </div>
                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">Order #67890</p>
                    <p className="text-sm text-gray-600">Date: 2023-07-20</p>
                  </div>
                  <p className="font-bold">$49.99</p>
                </div>
              </div>

              <hr className="my-8" />

              <h2 className="text-2xl font-bold text-gray-800 mb-6">Wishlist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for Wishlist Items */}
                <div className="border rounded-lg p-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product Image"
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                  <p className="font-bold">Product Name</p>
                  <p className="text-gray-600">$29.99</p>
                </div>
                <div className="border rounded-lg p-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product Image"
                    className="w-full h-32 object-cover mb-4 rounded-md"
                  />
                  <p className="font-bold">Another Product</p>
                  <p className="text-gray-600">$39.99</p>
                </div>
              </div>

              <hr className="my-8" />

              <div className="flex justify-between">
                <button
                  onClick={() => router.push('/')}
                  className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Back to Home
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;