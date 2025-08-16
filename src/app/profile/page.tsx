'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type User = {
  id: string;
  name: string;
  email: string;
};

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
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
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Redirecting to login...</div>;
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                  <p className="text-slate-600 dark:text-slate-400">{user.email}</p>
                </div>
              </div>
              <nav className="space-y-2">
                <a href="#" className="block text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 rounded-md transition-colors">Order History</a>
                <a href="#" className="block text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 rounded-md transition-colors">Wishlist</a>
                <a href="#" className="block text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 px-4 py-2 rounded-md transition-colors">Account Settings</a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">User Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2">Name</label>
                  <p className="text-slate-900 dark:text-white">{user.name}</p>
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2">Email</label>
                  <p className="text-slate-900 dark:text-white">{user.email}</p>
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2">Address</label>
                  <p className="text-slate-900 dark:text-white">123 Main St, Anytown, USA</p>
                </div>
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-2">Phone Number</label>
                  <p className="text-slate-900 dark:text-white">(123) 456-7890</p>
                </div>
              </div>

              <hr className="my-10 border-slate-200 dark:border-slate-700" />

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Order History</h2>
              <div className="space-y-6">
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Order #12345</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Date: 2023-07-23</p>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white">$99.99</p>
                </div>
                <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Order #67890</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Date: 2023-07-20</p>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white">$49.99</p>
                </div>
              </div>

              <hr className="my-10 border-slate-200 dark:border-slate-700" />

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => router.push('/')}
                  className="px-6 py-2 text-white bg-slate-500 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                >
                  Back to Home
                </button>
                <button
                  onClick={logout}
                  className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
