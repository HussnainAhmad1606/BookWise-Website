"use client"
import React from 'react';
import useUserStore from '../store/store';
const Profile = () => {
    const avatar = useUserStore((state) => state.avatar);
    const username = useUserStore((state) => state.username);
    const email = useUserStore((state) => state.email);
  return (
    <div className="rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4"
          src={avatar==""?`https://ui-avatars.com/api/?name=${username[0]}`:avatar}
          alt="Profile Picture"
        />
        <div>
          <h2 className="text-xl font-bold">{username}</h2>
          <p className="text-gray-500">Web Developer</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dignissim nibh tellus, ut pulvinar elit rhoncus id. Nulla facilisi.
          Donec maximus neque ac elit scelerisque consectetur.
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Contact</h3>
        <ul className="list-none">
          <li>
            <span className="mr-2">Email:</span>
            {email}
          </li>
          <li>
            <span className="mr-2">Phone:</span>
            +1 234 567 890
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
