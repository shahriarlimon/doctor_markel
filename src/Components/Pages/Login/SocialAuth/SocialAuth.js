import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { BiErrorCircle } from "react-icons/bi";
import {AiFillGithub} from 'react-icons/ai';
import { auth } from '../../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../../Loading/Loading';

const SocialAuth = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] = useSignInWithGithub(auth);
  if(googleLoading || gitHubLoading){
    return <Loading/>
  }
    return (
        <div>
            <button onClick={()=>signInWithGoogle()}
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 mb-3 w-full"
        >
          <FcGoogle className="text-2xl font-fold" />

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Continue with Google
          </span>
        </button>
        {
          googleError && <p className="text-red-500 text-xs flex items-center mt-1 ">
          <BiErrorCircle className="mr-1" />{" "}
          <span>{googleError?.message}</span>
        </p>
        }
            <button 
            onClick={()=>signInWithGithub()}
          className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-full"
        >
          <AiFillGithub className="text-2xl font-fold" />

          <span className="w-5/6 px-4 py-3 font-bold text-center">
            Continue with Github
          </span>
        </button>
        {
          gitHubError && <p className="text-red-500 text-xs flex items-center mt-1 ">
          <BiErrorCircle className="mr-1" />{" "}
          <span>{gitHubError?.message}</span>
        </p>
        }

        </div>
    );
};

export default SocialAuth;