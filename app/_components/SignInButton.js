function SignInButton() {
  return (
    <button className='flex items-center md:gap-6 gap-4 md:text-lg text-base border border-primary-300 md:px-10 px-6 md:py-4 py-3 font-medium'>
      <img
        src='https://authjs.dev/img/providers/google.svg'
        alt='Google logo'
        height='24'
        width='24'
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
