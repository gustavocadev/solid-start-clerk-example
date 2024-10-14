import { Navigate } from '@solidjs/router';
import { SignedIn, SignedOut, SignIn } from 'clerk-solidjs';

export default function Login() {
  return (
    <main class="container">
      <SignedOut>
        <div class="flex justify-center">
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <Navigate href="/" />
      </SignedIn>
    </main>
  );
}
