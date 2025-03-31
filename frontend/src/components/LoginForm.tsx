import { LoginFormData, useLoginForm } from '../hooks/useLoginForm';
import { useLogin } from '../api/auth';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useLoginForm();
  const { mutate, isPending, error } = useLogin(); // Use isPending instead of isLoading

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: (response) => {
        alert(response.message);
      },
      onError: (err) => {
        console.error(err.message);
      },
    });
  };

  return (
    <div
      style={{
        width: '320px',
        height: '314px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '48px',
        padding: '20px',
      }}
    >
      <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Welcome back!</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}
      >
        <div>
          <label>UID</label>
          <input
            {...register('email')}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register('password')}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isPending} 
          style={{
            backgroundColor: '#1E3A8A',
            color: 'white',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {isPending ? 'Logging in...' : 'Login'} {}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default LoginForm;