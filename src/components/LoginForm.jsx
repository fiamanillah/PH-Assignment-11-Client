import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [resetForm, setResetForm] = useState({
        email: '',
    });

    const { toast } = useToast();
    const { loginWithEmail, loginWithGoogle, resetPassword } = useAuth();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
        setResetForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleResetFormChange = e => {
        const { name, value } = e.target;
        setResetForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleResetPassword = async e => {
        e.preventDefault();
        try {
            setResetLoading(true);
            await resetPassword(resetForm.email);
            toast({
                variant: 'success',
                title: 'Success',
                description: 'Password reset link has been sent to your email.',
            });
        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred during password reset. Please try again.',
            });
        } finally {
            setResetLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setGoogleLoading(true);
            await loginWithGoogle();
            toast({
                variant: 'success',
                title: 'Success',
                description: 'You have successfully logged in.',
            });
        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'An error occurred during login. Please try again.',
            });
        } finally {
            setGoogleLoading(false);
        }
    };

    const handleLogin = async e => {
        e.preventDefault();

        try {
            setLoading(true);
            await loginWithEmail(formData.email, formData.password);
            toast({
                variant: 'success',
                title: 'Success',
                description: 'You have successfully logged in.',
            });
        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Invalid email or password. Please try again.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 ">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-2">
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

                <div className="flex justify-between items-center">
                    <Dialog>
                        <DialogTrigger className="text-sm">Forgot Password ?</DialogTrigger>
                        <DialogContent className="!bg-popover dark:!bg-dark-popover !bg-opacity-70 dark:!bg-opacity-70 backdrop-blur-xl p-4">
                            <DialogHeader>
                                <DialogTitle className="text-foreground dark:text-dark-foreground">
                                    Reset your password
                                </DialogTitle>
                                <DialogDescription>
                                    Anyone who has this link will be able to view this.
                                </DialogDescription>
                                <div>
                                    <Label htmlFor="email">Your email address</Label>
                                    <Input
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={resetForm.email}
                                        onChange={handleResetFormChange}
                                        required
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button
                                        type="button"
                                        disabled={loading}
                                        onClick={handleResetPassword}
                                        className=" bg-accent dark:bg-dark-accent text-white hover:bg-accent dark:hover:bg-dark-accent hover:bg-opacity-80 dark:hover:bg-opacity-80"
                                    >
                                        {resetLoading ? (
                                            <Loader2 className="animate-spin h-5 w-5" />
                                        ) : (
                                            'Reset Password'
                                        )}
                                    </Button>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 bg-accent dark:bg-dark-accent text-white hover:bg-accent dark:hover:bg-dark-accent hover:bg-opacity-80 dark:hover:bg-opacity-80"
                >
                    {loading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Login'}
                </Button>

                <Button
                    variant="secondary"
                    className="w-full mt-4 border border-accent dark:border-dark-accent"
                    disabled={googleLoading}
                    type="button"
                    onClick={handleGoogleLogin}
                >
                    {googleLoading ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                        <p className="inline-block mr-2 text-foreground dark:text-dark-foreground">
                            <FcGoogle className="inline-block mr-2" />
                            Login with Google
                        </p>
                    )}
                </Button>

                <div className="flex items-center gap-2 mt-4">
                    <p>Don&apos;t have an account? </p> <Link to={'/sign-up'}>Sign Up</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
