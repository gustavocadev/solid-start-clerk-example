import { Navigate, RouteSectionProps } from '@solidjs/router';
import { SignedIn, SignedOut } from 'clerk-solidjs';

export default function AuthedLayout(props: RouteSectionProps) {
  return (
    <>
      <SignedIn>{props.children}</SignedIn>
      <SignedOut>
        <Navigate href="/login" />
      </SignedOut>
    </>
  );
}
