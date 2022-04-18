import React from "react";

const Blogs = () => {
  return (
    <div className="mx-auto">
      <div className="px-16 py-8 mb-4">
        <h1 className="text-2xl font-semibold mb-2">
          Difference between authorization and authentication
        </h1>
        <p>
          1.Authentication confirms user identity to grant access to the
          system.On the other hand, Authorization determines whether users are
          authorized to access the resources.
          <br />
          2.Authentication is the process of validating user credentials to gain
          user access.But Authorization is the process of verifying whether
          access is allowed or not.
          <br />
          3.Authentication confirms whether user is what he claims to be wheres
          Authorization determines what a user can and cann't access.
          <br />
          4.Username and password is required for Authentication .But
          Authorziation requirements depend upon to the context of sequity
          level.
          <br />
          5.Authentication is the first step of authorization wheres
          Authorization is done after authentication.
        </p>
      </div>
      <div className="px-16 py-8">
        <h1 className="text-2xl font-semibold mb-2">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p>
          Many features make Google Firebase the go-to backend development tool
          for web and mobile projects. It cuts down on development time and
          effort. It's also an excellent prototyping tool. Firebase is simple,
          lightweight, user-friendly, and well-known in the industry.
          <br />
          Authentication alternative of firebase:
          <br />
          *Auth0
          <br />
          *MongoDB
          <br />
          *Passport
          <br />
         * Amazon Congnito
          <br />
          *Okta
          <br />
          *JSON web Token
          <br />
          *Keycloak
        </p>
      </div>
      <div className="px-16 py-8 mb-16">
        <h1 className="text-2xl font-semibold mb-2 ">
          What other services does firebase provide other than authentication?
        </h1>
        <p>
          *Cloud Firestore
          <br />
          *Cloud Function
          <br />
          *Hosting
          <br />
          *Cloud Storage
          <br />
          *Googele Analytics
          <br />
          *Prediction
          <br />
          *Cloud Messaging
        </p>
      </div>
    </div>
  );
};

export default Blogs;
