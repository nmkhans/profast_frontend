export const firebaseErrors = {
  "auth/invalid-email": "The email address is badly formatted.",
  "auth/user-disabled": "This user account has been disabled.",
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "The password is incorrect.",
  "auth/email-already-in-use":
    "This email is already associated with another account.",
  "auth/operation-not-allowed":
    "This authentication method is not enabled.",
  "auth/weak-password": "Password should be at least 6 characters.",
  "auth/missing-email": "Please enter your email address.",
  "auth/missing-password": "Please enter your password.",
  "auth/invalid-password": "The password is invalid or too weak.",
  "auth/too-many-requests":
    "Too many attempts. Please try again later.",
  "auth/network-request-failed":
    "Network error. Please check your internet connection.",
  "auth/internal-error":
    "An internal error occurred. Please try again.",
  "auth/invalid-credential": "The credentials provided are invalid.",
  "auth/invalid-verification-code":
    "The verification code is invalid.",
  "auth/invalid-verification-id": "The verification ID is invalid.",
  "auth/account-exists-with-different-credential":
    "An account already exists with the same email but different sign-in credentials.",
  "auth/credential-already-in-use":
    "This credential is already associated with a different user account.",
  "auth/requires-recent-login":
    "Please log in again to perform this action.",
  "auth/popup-closed-by-user":
    "The popup was closed before completing the sign-in.",
  "auth/popup-blocked": "The popup was blocked by the browser.",
  "auth/cancelled-popup-request":
    "Only one popup request is allowed at a time.",
  "auth/unauthorized-domain":
    "This domain is not authorized for OAuth operations.",
  "auth/invalid-action-code":
    "The action code is invalid or has expired.",
  "auth/expired-action-code": "The action code has expired.",
  "auth/missing-verification-code": "Missing verification code.",
  "auth/missing-verification-id": "Missing verification ID.",
  "auth/invalid-phone-number": "The phone number is invalid.",
  "auth/missing-phone-number": "Please enter a phone number.",
  "auth/quota-exceeded": "Quota exceeded. Try again later.",
  "auth/app-not-authorized":
    "This app is not authorized to use Firebase Authentication.",
  "auth/claims-too-large": "The claims object is too large.",
  "auth/email-change-needs-verification":
    "Email change needs verification.",
  "auth/admin-restricted-operation":
    "This operation is restricted to administrators only.",
  "auth/invalid-tenant-id": "Invalid tenant ID.",
  "auth/tenant-id-mismatch": "Tenant ID mismatch.",
  "auth/session-cookie-expired":
    "The session cookie has expired. Please sign in again.",
  "auth/session-cookie-revoked":
    "The session cookie has been revoked.",
  "auth/null-user": "No user is currently signed in.",
  unknown: "An unexpected error occurred.",
};
