import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

function App() {
    return (
        <div className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground ">
            <h1>App</h1>
            <Button variant="outline">Click me</Button>
            <Card className="w-[350px] !bg-blue-500">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default App;
