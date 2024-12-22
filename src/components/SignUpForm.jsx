import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';

function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoUrl: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });
    const { toast } = useToast();

    const navigate = useNavigate();

    const { registerWithEmail, loginWithGoogle, logout } = useAuth();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleGoogleSignUp = async () => {
        try {
            setGoogleLoading(true);
            await loginWithGoogle();
        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred during sign up. Please try again.',
            });
        } finally {
            setGoogleLoading(false);
        }
    };

    const handleSignUp = async e => {
        e.preventDefault();

        try {
            if (formData.password !== formData.confirmPassword) {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Passwords do not match',
                });
                return;
            }
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
            // At least 6 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character

            if (!passwordRegex.test(formData.password)) {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description:
                        'Password must be at least 6 characters, include one uppercase letter, one lowercase letter, one number, and one special character',
                });
            }

            if (!formData.terms) {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'You must agree to the terms and conditions',
                });
                return;
            }
            setLoading(true);
            await registerWithEmail(
                formData.email,
                formData.password,
                formData.name,
                formData.photoUrl
            );
            logout();
            navigate('/login');
            toast({
                variant: 'success',
                title: 'Success',
                description: 'You have successfully signed up',
            });

            // console.log(formData);
        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred during sign up. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 border border-muted dark:border-dark-muted rounded shadow bg-card dark:bg-dark-card">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSignUp} className="space-y-2">
                <div>
                    <Label htmlFor="name">Your full name</Label>
                    <Input
                        label="Full Name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="email">Your email address</Label>
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="photoUrl">Your photo</Label>
                    <Input
                        label="Photo"
                        name="photoUrl"
                        type="url"
                        placeholder="Your photo url"
                        value={formData.photoUrl}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="password">Your password</Label>
                    <div className="relative">
                        <Input
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            className="absolute top-0 right-0"
                            variant="icon"
                            type="button"
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </Button>
                    </div>
                </div>
                <div>
                    <Label htmlFor="confirmPassword">Confirm password</Label>

                    <div className="relative">
                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            className="absolute top-0 right-0"
                            variant="icon"
                            type="button"
                            onClick={() => setShowConfirmPassword(prev => !prev)}
                        >
                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onClick={() =>
                                setFormData(prevState => ({
                                    ...prevState,
                                    terms: !prevState.terms,
                                }))
                            }
                        />
                        <Label htmlFor="terms" className="text-sm">
                            I agree to the <Link to={'/terms'}>terms and conditions</Link>
                        </Label>
                    </div>
                    <Link to={'reset-password'}>
                        <Button variant="link">Forgot Password</Button>
                    </Link>
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-accent dark:bg-dark-accent text-white hover:bg-accent dark:hover:bg-dark-accent hover:bg-opacity-80 dark:hover:bg-opacity-80"
                >
                    {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Sign Up'}
                </Button>

                <Button
                    variant="secondary"
                    className="w-full mt-4 border border-accent dark:border-dark-accent"
                    disabled={googleLoading}
                    type="button"
                    onClick={handleGoogleSignUp}
                >
                    {googleLoading ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                        <p className="inline-block mr-2">
                            {' '}
                            <FcGoogle className="inline-block mr-2" />
                            Sign up with Google
                        </p>
                    )}
                </Button>
                <div className="flex items-center gap-2">
                    <p>Already have an account? </p> <Link to={'/login'}>Login</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
