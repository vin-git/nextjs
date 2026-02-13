Authentication
----------------
Most apps revolve around users
When building for users, we need to consider three fundemental concepts:
- Identity - verifying who someone is through authentication
- Sessions - keep track of a user's logged-in state across requests
- Access - controls what they can do
In developer terms, we call these authentication, session management and authorization.

With React single-page-apps, you're only dealing with client-side code

With Next.js, you've got to protect your app from three different angles: client-side, server-side, and API routes.

1. Lets users sign up
2. Give them a way to sign in
3. Enable them to manage their account (password changes, email updates etc.)
4. Show or hide UI elements based on whether they're logged in.
5. Protect certain routes depending on authentication status.
6. Access session and user data when needed
7. Set up role-based access control ( admin, editor, viewer and so on)
8. Provide way to sign out

Clerk
------
User roles and permissions
---------------------------
Most apps need more than just checking if someone's logged in or not, they need different permission levels for different users.

How to implement Role base access control (RBAC) using Clerk
Configure the session token
---------------------------
- Clerk gives us something called user metadata, which is like a storage space for extra user information
- we'll use it to store user roles.
- we'll specifically use publicMetadata because it's read-only in the browser, making it super secure for storing sensitive information like user roles.
- to build a basic RBAC system, we need to make sure this publicMetadata readily available in the session token
- By doin this, we can quickly check user roles without having to make extra network requests every time we need this information. This makes our app much more efficient.