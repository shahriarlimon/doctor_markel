import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';

const SocialAuth = () => {
    return (
        <div>
            <button
          href="/"
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 mb-3 w-full"
        >
          <FcGoogle className="text-2xl font-fold" />

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Continue with Google
          </span>
        </button>
            <button
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-full"
        >
          <AiFillGithub className="text-2xl font-fold" />

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Continue with Github
          </span>
        </button>

        </div>
    );
};

export default SocialAuth;