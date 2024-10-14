import { cache, createAsync } from '@solidjs/router';
import { UserButton, useUser } from 'clerk-solidjs';
import { auth } from 'clerk-solidjs/start/server';

const getUser = cache(async () => {
  'use server';
  const userAuth = auth();

  return userAuth.userId;
}, 'get-user');

export default function Home() {
  const user = createAsync(() => getUser());
  const clerk = useUser();
  return (
    <>
      <UserButton />

      <h1>Protected route for {clerk.user()?.fullName}</h1>
      <h1>Protected route for {user()}</h1>
    </>
  );
}
