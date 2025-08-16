'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

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
    <>
      <Navbar />
      <div className="bg-slate-100 dark:bg-slate-900 min-h-screen">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  
                  
                  <div>
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
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">User Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                <hr className="my-8 border-slate-200 dark:border-slate-700" />

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">Order History</h2>
                <div className="space-y-6">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <p className="font-bold text-slate-900 dark:text-white">Order #12345</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Date: 2023-07-23</p>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white">$99.99</p>
                  </div>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="mb-4 sm:mb-0">
                      <p className="font-bold text-slate-900 dark:text-white">Order #67890</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Date: 2023-07-20</p>
                    </div>
                    <p className="font-bold text-slate-900 dark:text-white">$49.99</p>
                  </div>
                </div>

                <hr className="my-8 border-slate-200 dark:border-slate-700" />

                <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-4 sm:space-y-0">
                  <button
                    onClick={() => router.push('/')}
                    className="w-full sm:w-auto px-6 py-2 text-white bg-slate-500 rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  >
                    Back to Home
                  </button>
                  <button
                    onClick={logout}
                    className="w-full sm:w-auto px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white dark:bg-slate-900 shadow-inner">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400">©{new Date().getFullYear()} SupplyHomie. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-500 dark:text-slate-400 sm:mt-0">
              <li><a href="#" className="hover:underline me-4 md:me-6">About</a></li>
              <li><a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline me-4 md:me-6">Licensing</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProfilePage;
